import {
  FC,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import {
  useQuery,
  useMutation,
} from '@tanstack/react-query';
import {
  Grid,
  Box,
  Alert,
  LinearProgress,
} from '@mui/material';
import format from 'date-fns/format';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../task/task';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { Status } from '../createTaskForm/enums/Status';
import { IUpdateTask } from './interfaces/IUpdateTask';
import { countTask } from './helpers/countTask';
import { TaskStatusChangedContext } from '../../context';

export const TaskArea: FC = (): ReactElement => {
  const tasksUpdatedContext = useContext(
    TaskStatusChangedContext,
  );

  const { isError, isLoading, data, refetch } = useQuery(
    ['tasks'],
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET',
      );
    },
  );

  const updateTaskStatus = useMutation(
    (data: IUpdateTask) =>
      sendApiRequest(
        'http://localhost:3200/tasks',
        'PUT',
        data,
      ),
  );

  useEffect(() => {
    refetch();
  }, [tasksUpdatedContext.updated]);

  useEffect(() => {
    if (updateTaskStatus.isSuccess) {
      tasksUpdatedContext.toggle();
    }
  }, [updateTaskStatus.isSuccess]);

  const onStatusChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    updateTaskStatus.mutate({
      id,
      status: e.target.checked
        ? Status.IN_PROGRESS
        : Status.TODO,
    });
  };

  const onMarkAsDoneHandler = (id: number) => {
    updateTaskStatus.mutate({
      id,
      status: Status.DONE,
    });
  };

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        {/* <h2>Status Of Your Tasks As On: {new Date().toDateString()}</h2> */}
        <h2>
          Status Of Your Tasks As On:{' '}
          {format(new Date(), 'PPPPP')}
        </h2>
      </Box>
      <Grid
        container
        display={'flex'}
        justifyContent={'center'}
      >
        <Grid
          item
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-around'}
          alignItems={'center'}
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter
            status={Status.TODO}
            count={data ? countTask(data, Status.TODO) : 0}
          />
          <TaskCounter
            status={Status.IN_PROGRESS}
            count={
              data ? countTask(data, Status.IN_PROGRESS) : 0
            }
          />
          <TaskCounter
            status={Status.DONE}
            count={data ? countTask(data, Status.DONE) : 0}
          />
        </Grid>
        <Grid
          item
          display={'flex'}
          flexDirection={'column'}
          xs={10}
          md={8}
        >
          {isError && (
            <Alert
              severity="error"
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              There was an error fetching your tasks
            </Alert>
          )}

          {!isError &&
            Array.isArray(data) &&
            data.length === 0 && (
              <Alert severity="warning">
                You do not have any tasks created yet. Start
                by creating some tasks!
              </Alert>
            )}

          {isLoading ? (
            <LinearProgress />
          ) : (
            Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter(
                (task) =>
                  task.status === Status.TODO ||
                  task.status === Status.IN_PROGRESS,
              )
              .map((task, index) => (
                <Task
                  key={index}
                  id={Number(task.id)}
                  title={task.title}
                  date={new Date(task.date)}
                  description={task.description}
                  priority={task.priority}
                  status={task.status}
                  onStatusChange={onStatusChangeHandler}
                  onClick={onMarkAsDoneHandler}
                />
              ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

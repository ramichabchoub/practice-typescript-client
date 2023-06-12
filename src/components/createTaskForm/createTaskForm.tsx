import { FC, ReactElement, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskArea/interfaces/ICreateTask';

export const CreateTaskForm: FC = (): ReactElement => {
  const [taskTitle, setTaskTitle] = useState<
    string | undefined
  >(undefined);
  const [taskDescription, setTaskDescription] = useState<
    string | undefined
  >(undefined);
  const [taskDate, setTaskDate] = useState<Date | null>(
    new Date(),
  );
  const [taskStatus, setTaskStatus] = useState<string>(
    Status.TODO,
  );
  const [taskPriority, setTaskPriority] = useState<string>(
    Priority.NORMAL,
  );

  const createTaskMutation = useMutation(
    (data: ICreateTask) =>
      sendApiRequest(
        'http://localhost:3200/tasks',
        'POST',
        data,
      ),
  );

  const createTaskHandler = () => {
    if (!taskTitle || !taskDescription || !taskDate) {
      return;
    }
    const task: ICreateTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate.toString(),
      status: taskStatus,
      priority: taskPriority,
    };
    createTaskMutation.mutate(task);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Alert
        severity="success"
        sx={{ width: '100%', marginBottom: '16' }}
      >
        <AlertTitle>Success</AlertTitle>
        The task has been created successfully.
      </Alert>

      <Typography mb={2} variant="h6" component={'h2'}>
        Create A Task
      </Typography>
      <Stack spacing={2} width="100%">
        <TaskTitleField
          label={'Task Title'}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <TaskDescriptionField
          label={'Task Description'}
          onChange={(e) =>
            setTaskDescription(e.target.value)
          }
        />
        <TaskDateField
          label={'Task Date'}
          onChange={(date) => setTaskDate(date)}
        />
        <Stack direction="row" spacing={2} width="100%">
          <TaskSelectField
            label={'Select Status'}
            name="status"
            items={[
              {
                value: Status.TODO,
                label: Status.TODO.toUpperCase(),
              },
              {
                value: Status.IN_PROGRESS,
                label: Status.IN_PROGRESS.toUpperCase(),
              },
              {
                value: Status.DONE,
                label: Status.DONE.toUpperCase(),
              },
            ]}
            value={taskStatus}
            onChange={(e) =>
              setTaskStatus(e.target.value as string)
            }
          />
          <TaskSelectField
            label={'Select Priority'}
            name={'priority'}
            items={[
              {
                value: Priority.LOW,
                label: Priority.LOW.toUpperCase(),
              },
              {
                value: Priority.NORMAL,
                label: Priority.NORMAL.toUpperCase(),
              },
              {
                value: Priority.HIGH,
                label: Priority.HIGH.toUpperCase(),
              },
            ]}
            value={taskPriority}
            onChange={(e) =>
              setTaskPriority(e.target.value as string)
            }
          />
        </Stack>
        <LinearProgress />
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandler}
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};

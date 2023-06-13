import { FC, ReactElement } from 'react';
import { useQuery } from '@tanstack/react-query';
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

export const TaskArea: FC = (): ReactElement => {
  const { isError, isLoading, data, refetch } = useQuery(
    ['tasks'],
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET',
      );
    },
  );

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
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
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

          {isLoading && <LinearProgress />}

          <Task id="123" />
          <Task id="123" />
        </Grid>
      </Grid>
    </Grid>
  );
};

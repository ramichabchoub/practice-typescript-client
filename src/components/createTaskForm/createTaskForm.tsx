import { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} variant="h6" component={'h2'}>
        Create A Task
      </Typography>
      <Stack spacing={2} width="100%">
        <TaskTitleField label={'Task Title'} />
        <TaskDescriptionField label={'Task Description'} />
        <TaskDateField />
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
          />
        </Stack>
      </Stack>
      {/* task date */}
      {/* task status */}
      {/* task priority */}
    </Box>
  );
};

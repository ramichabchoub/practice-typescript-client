import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

export const TaskDescriptionField: FC =
  (): ReactElement => {
    return (
      <TextField
        id="task-description"
        name="task-description"
        label="Task Description"
        placeholder="Write your task description here"
        variant="outlined"
        size="small"
        multiline
        rows={4}
        fullWidth
      />
    );
  };

import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

export const TaskTitleField: FC = (): ReactElement => {
  return (
    <TextField
      id="task-title"
      name="task-title"
      label="Task Title"
      placeholder="Write your task title here"
      variant="outlined"
      size="small"
      fullWidth
    />
  );
};

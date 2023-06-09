import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import propTypes from 'prop-types';
import { ITextField } from './interfaces/ITextField';

export const TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  const { onChange, disabled, label } = props;
  return (
    <TextField
      id="task-description"
      name="task-description"
      label={label}
      placeholder="Write your task description here"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: propTypes.func,
  disabled: propTypes.bool,
  label: propTypes.string,
  placeholder: propTypes.string,
};

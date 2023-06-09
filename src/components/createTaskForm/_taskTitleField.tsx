import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import propTypes from 'prop-types';
import { ITextField } from './interfaces/ITextField';

export const TaskTitleField: FC<ITextField> = (
  props,
): ReactElement => {
  const { onChange, disabled, label } = props;
  return (
    <TextField
      id="task-title"
      name="task-title"
      label={label}
      placeholder="Write your task title here"
      variant="outlined"
      size="small"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: propTypes.func,
  disabled: propTypes.bool,
  label: propTypes.string,
  placeholder: propTypes.string,
};

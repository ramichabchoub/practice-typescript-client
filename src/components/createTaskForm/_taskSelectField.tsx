import React, { FC, ReactElement } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import {
  ISelectField,
  iSelectItems,
} from './interfaces/ISelectField';
import propsTypes from 'prop-types';

export const TaskSelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  const {
    items = [
      { value: '10', label: 'Ten' },
      { value: '20', label: 'Twenty' },
      { value: '30', label: 'Thirty' },
      { value: '40', label: 'Forty' },
    ],
    name = 'task-status-select',
    disabled = false,
    label = 'Select Box',
    onChange = (e: SelectChangeEvent) => console.log(e),
    value = '',
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="task-status-select-label">
        {label}
      </InputLabel>
      <Select
        labelId="task-status-select-label"
        id="task-status-select"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  name: propsTypes.string,
  disabled: propsTypes.bool,
  label: propsTypes.string,
  onChange: propsTypes.func,
  value: propsTypes.string,
  items: propsTypes.arrayOf(
    propsTypes.shape({
      value: propsTypes.string.isRequired,
      label: propsTypes.string.isRequired,
    }),
  ) as React.Validator<iSelectItems[] | null | undefined>,
};

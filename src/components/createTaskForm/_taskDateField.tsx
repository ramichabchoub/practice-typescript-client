import { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';
import propsTypes from 'prop-types';

export const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  const {
    value = new Date(),
    onChange = (date) => console.log(date),
    disabled = false,
    label = 'Task Date',
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label={label}
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          // renderInput={(params) => (
          //   <TextField {...params} />
          // )}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  value: propsTypes.instanceOf(Date),
  onChange: propsTypes.func,
  disabled: propsTypes.bool,
  label: propsTypes.string,
};

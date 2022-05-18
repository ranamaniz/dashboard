import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BasicDateTimePicker({ dateTimeValue, onDateTimeChange }) {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={
          (props) => <TextField
            {...props} />
        }
        value={dateTimeValue}
        onChange={(newValue) => {
          onDateTimeChange(newValue);
        }}


      />
    </LocalizationProvider>
  );
}

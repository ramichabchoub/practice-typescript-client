import { FC, ReactElement } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import propTypes from 'prop-types';

export const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    onClick = (e) => {
      console.log(e);
    },
    onSatatusChange = (e) => {
      console.log(e);
    },
  } = props;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      mt={4}
    >
      <FormControlLabel
        label={'In Progress'}
        control={
          <Switch
            color="warning"
            checked
            onChange={(e) => {
              onSatatusChange(e);
            }}
          />
        }
      />
      <Button
        variant={'contained'}
        color={'success'}
        size={'small'}
        sx={{
          color: 'white',
        }}
        onClick={(e) => {
          onClick(e);
        }}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onClick: propTypes.func,
  onSatatusChange: propTypes.func,
};

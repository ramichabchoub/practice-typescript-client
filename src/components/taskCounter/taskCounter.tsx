import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import propTypes from 'prop-types';

export const TaskCounter: FC<ITaskCounter> = (
  props,
): ReactElement => {
  const { status = Status.IN_PROGRESS, count = 0 } = props;

  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: emitCorrectBorderColor(status),
          }}
        >
          <Typography color={'#ffffff'} variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color={'#ffffff'}
          fontWeight={'bold'}
          fontSize={'20px'}
          variant="h5"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  status: propTypes.oneOf([
    Status.TODO,
    Status.IN_PROGRESS,
    Status.DONE,
  ]),
  count: propTypes.number,
};

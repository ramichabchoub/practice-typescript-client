import { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { ITaskBody } from './interfaces/ITaskBody';
import propTypes from 'prop-types';

export const TaskBody: FC<ITaskBody> = (
  props,
): ReactElement => {
  const { description = 'Default Description' } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskBody.propTypes = {
  description: propTypes.string,
};

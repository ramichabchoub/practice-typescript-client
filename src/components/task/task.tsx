import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';

export const Task: FC = (props): ReactElement => {
  return (
    <Box
      display={'flex'}
      width={'100%'}
      justifyContent={'flex-start'}
      flexDirection={'column'}
      mb={2}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        // boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        border: '1px solid',
        borderColor: 'error.light',
      }}
    >
      <TaskHeader />
      {/* Task body */}
      {/* Task footer */}
    </Box>
  );
};

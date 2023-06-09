import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

export const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          RA
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome, Rami
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};

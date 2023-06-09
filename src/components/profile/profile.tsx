import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface IProfile {
  name?: string;
}

export const Profile: FC<IProfile> = (
  props,
): ReactElement => {
  const { name = 'Ramii' } = props;
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
          {name.substring(0, 2).toUpperCase()}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome, {name}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
};

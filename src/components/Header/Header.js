import React from 'react';

import Bell from '../../components/Common/NotificationButtons/Bell';
import CommonButton from '../../components/Common/Buttons/CommonButton';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';

const headerStyles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#009be5',
    padding: '2rem',
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
    marginBottom: '20px',
    '*': {
      marginRight: '5px',
    },
  },
  middleRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
    marginLeft: '320px',
  },
  link: {
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
      color: '#fff',
      cursor: 'pointer',
    },
  },
  webButton: {
    marginRight: '5px',
  },
};

const Header = ({ title }) => {
  return (
    <Box sx={headerStyles.wrapper}>
      {/* first row */}
      <Box sx={headerStyles.topRow}>
        <Typography sx={headerStyles.link}>Go to docs</Typography>
        <Bell iconColor="white" />
        <Avatar alt="avatar" src="https://mui.com/static/images/avatar/1.jpg" />
      </Box>

      {/* second row */}
      <Box sx={headerStyles.middleRow}>
        <Typography variant="h1" color="white">
          {title}
        </Typography>
        <Box>
          <CommonButton sx={headerStyles.webButton} variant="outlined">
            Web setup
          </CommonButton>
          <Tooltip title="help">
            <IconButton color="white" sx={headerStyles.helpIcon}>
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu';

import React from 'react';

const notifications = [
  {
    id: 0,
    label: 'First notification',
  },
  {
    id: 1,
    label: 'Second notification',
  },
];

const Bell = ({ iconColor }) => {
  const newNotifications = `You have ${notifications.length} new notifications!`;
  const noNotifications = 'You have no notifications';

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip
        title={notifications.length ? newNotifications : noNotifications}
      >
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleOpen : null}
          anchorEl={anchorEl}
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon sx={{ fontSize: 30 }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        notifications={notifications}
      />
    </React.Fragment>
  );
};

export default Bell;

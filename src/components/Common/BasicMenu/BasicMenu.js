import React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const BasicMenu = ({ anchorEl, handleClose, open, notifications }) => {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {notifications.map((item) => (
          <MenuItem onClick={handleClose}>{item.label}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default BasicMenu;

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BasicCard from '../../components/Common/BasicCard/BasicCard';
import SearchBar from '../../components/Common/SearchBar/SearchBar';
import CommonButton from '../../components/Common/Buttons/CommonButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Typography } from '@mui/material';
import { cardHeaderStyles } from './styles';
import GridWrapper from '../../components/Common/GridWrapper/GridWrapper';
import NewUserModal from '../../components/Common/Modals/NewUserModal/NewUserModal';

const AuthenticationPage = () => {
  const [open, setOpen] = useState(false);

  const getHeader = () => {
    const handleSearch = (event) => {
      console.log(event.target.value);
    };

    const addUser = () => {
      setOpen(true);
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by name..."
          onChange={(event) => handleSearch(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <CommonButton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
          >
            Add user
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const getContent = () => (
    <Typography
      align="center"
      sx={{
        margin: '40px 16px',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: '1.3rem',
      }}
    >
      No users for this project yet
    </Typography>
  );

  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
      <NewUserModal open={open} onClose={() => setOpen(false)} />
    </GridWrapper>
  );
};

export default AuthenticationPage;

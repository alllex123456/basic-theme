import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { basicModalStyles } from './styles';
import CommonButton from '../Buttons/CommonButton';

const BasicModal = ({ open, onClose, title, subTitle, content, validate }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={basicModalStyles.wrapper}>
        <Typography variant="h6" component="h2" sx={{ fontSize: '1.6rem' }}>
          {title}
        </Typography>
        <Typography sx={{ mt: 2, fontSize: '1.4rem' }}>{subTitle}</Typography>
        {content}
        <Box sx={basicModalStyles.buttons}>
          <CommonButton variant="contained" onClick={validate}>
            Submit
          </CommonButton>
          <CommonButton onClick={onClose}>Cancel</CommonButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;

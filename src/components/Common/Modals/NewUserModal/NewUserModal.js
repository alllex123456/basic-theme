import React from 'react';
import BasicModal from '../../BasicModal/BasicModal';
import Box from '@mui/system/Box';
import { newUserModalStyles } from './styles.js';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const NewUserModal = ({ open, onClose }) => {
  const getContent = () => (
    <Box sx={newUserModalStyles}>
      <TextField
        placeholder="User ID"
        label="User ID"
        name="userId"
        required
        {...register('userId')}
        error={errors.userId ? true : false}
        helperText={errors.userId?.message}
      />
      <TextField
        placeholder="Email"
        label="Email"
        name="email"
        required
        {...register('email')}
        error={errors.email ? true : false}
        helperText={errors.email?.message}
      />
      <TextField
        placeholder="Phone number"
        label="Phone number"
        name="phone"
        required
        {...register('phone')}
        error={errors.phone ? true : false}
        helperText={errors.phone?.message}
      />
    </Box>
  );

  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required('User ID is required')
      .min('User ID must be at least 6 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const addUser = (data) => {
    console.log('data');
  };

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New user"
      subTitle="Fill out inputs and hit 'submit' button"
      content={getContent()}
      validate={() => {}}
      onSubmit={addUser}
    />
  );
};

export default NewUserModal;

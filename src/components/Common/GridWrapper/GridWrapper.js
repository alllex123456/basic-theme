import React from 'react';
import Grid from '@mui/material/Grid';
import { gridWrapperStyles } from './styles';

const GridWrapper = ({ children }) => {
  return (
    <Grid xs={12} sx={gridWrapperStyles}>
      {children}
    </Grid>
  );
};

export default GridWrapper;

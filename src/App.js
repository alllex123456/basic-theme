import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header';

function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const parsedLocation = location.pathname.replace(/\W/g, '');
    setTitle(parsedLocation);
  }, [location]);

  return (
    <Grid container>
      <NavBar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;

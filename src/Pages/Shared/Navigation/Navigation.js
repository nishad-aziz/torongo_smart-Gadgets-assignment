import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Torongo
          </Typography>
          <Link to="/phonediagnosis"><Button color="inherit">Repair Shop</Button>
          </Link>
          {
            user?.email?
            <Box>
              <NavLink style={{ textDecoration: 'none',color: 'White' }} to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </NavLink>
              <Button onClick={logout} color="inherit">Logout</Button>
            </Box>
              :
              <NavLink style={{ textDecoration: 'none',color: 'White' }} to="/login">
                <Button color="inherit">Login</Button>
              </NavLink>
          }

        </Toolbar>
      </AppBar>

    </Box >
  );
};

export default Navigation;
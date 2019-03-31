import React from 'react';
import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button } from '@material-ui/core';
import Login from './Login';

export default function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <IconButton> Test </IconButton>
            <Button>Test</Button>


          </Typography>
          <Login />
          <Button color="inherit">Login</Button>

        </Toolbar>
      </AppBar>
  )
}

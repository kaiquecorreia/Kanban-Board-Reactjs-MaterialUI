import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';
// import { Container } from './styles';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <Typography variant="h6" color="inherit">
          Kanban Board
        </Typography>
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;

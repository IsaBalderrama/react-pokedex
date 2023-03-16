/* eslint-disable */ 
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const NavBar = () => {
  return (
    <AppBar 
        position='fixed'
    >
        <Toolbar>
            <IconButton
              color='inherit'  
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' }}}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> Pokedex </Typography>
                <IconButton color='error'>
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}

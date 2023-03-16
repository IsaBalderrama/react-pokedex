/* eslint-disable */ 
import { Facebook, Google } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
    <form onSubmit={() => {}}>
        <Grid container>
          <Grid 
            container
            sx={{ mt: 1 }}>
            <Grid 
                item 
                xs={ 12 }
              >
            </Grid>
          </Grid>
          
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={ 12 } sm={ 6 }  justifyContent="center" flexDirection="row">
              <Button
                // disabled={ isAuthenticating }
                 variant='contained' 
                 fullWidth
                // onClick={ onGoogleSignIn }
                 >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>

              <Button 
                 sx={{ mt: 1, pt:1 }}
                // disabled={ isAuthenticating }
                 variant='contained' 
                 fullWidth
                // onClick={ onGoogleSignIn }
                 >
                <Facebook />
                <Typography x={{ ml: 1 }}>Facebook</Typography>
              </Button>
            </Grid>
          </Grid>

        </Grid>

      </form>

  </AuthLayout>
  )
}

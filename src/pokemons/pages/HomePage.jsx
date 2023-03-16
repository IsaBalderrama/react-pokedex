/* eslint-disable */ 
import { Box, Button, Card, CardContent, Typography, CardActions, Grid  } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRegions } from '../../store/slices/region/thunks';
import { PokedexLayout } from '../layout/PokedexLayout';



export const HomePage = () => {

  const dispatch = useDispatch();

  const { isLoading, regions } = useSelector( state => state.region );

  useEffect(() => {
    dispatch( getRegions() );
  }, []);

  return (

    <>
    <PokedexLayout>
       <h2>Regiones</h2>

       
          <Grid container  spacing={2}>
             { regions.map(({name}) => (
              <Grid key={ name } item xs={ 12 } sm={ 4 }>
                  <Card variant="outlined"  >
                     <Card>
                        <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Region
                          </Typography>
                          <Typography variant="h5" component="div">
                           {name}
                          </Typography>
                      
                        </CardContent>
                        <CardActions>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                  </Card>
                  </Grid>
                ))
              }
          </Grid>
        
       

       {/* Page*/}
       {/* Page*/}
    </PokedexLayout>
 
    </>
   
  )
}

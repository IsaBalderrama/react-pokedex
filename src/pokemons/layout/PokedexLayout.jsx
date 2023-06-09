/* eslint-disable */ 
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar  } from '../components';


//const drawerWidth = 280;

export const PokedexLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} >

        <NavBar />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}
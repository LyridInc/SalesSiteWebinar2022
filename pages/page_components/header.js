import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Card, Box, Grid, Typography, createTheme, ThemeProvider, Avatar, CardMedia } from '@mui/material';


const DrawerAppBar = () =>{

  return (
    
    <Grid>
        <AppBar 
          component="nav" 
          style={{ 
            // height: '100vh',
            //   background: 'linear-gradient(#090932, #9198e5)'
            // background: ['linear-gradient(320deg, #090932, #692098 175%)']
          }}
        >
            <Card  
                // justifyContent="center"
                component="nav" 
                style={{ 
                    height: '40vh',
                    width: '40vh',
                    //   background: 'linear-gradient(#090932, #9198e5)'
                    // background: ['linear-gradient(320deg, #090932, #692098 175%)']
                }}
            >
                Lyrid

            </Card>
      </AppBar>         
    </Grid>
    
  );
}

export default DrawerAppBar;

import PropTypes from 'prop-types';
import { Button, ButtonProps, Grid, Typography, Card, CardContent, CardActions, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';
import AppsIcon from '@mui/icons-material/Apps';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button_Custom from '../../FrontEnd_Components/Button_Custom/button';

const ProductCard = styled(Card)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: purple[500],
    '&:hover': {
        // height: '60vh',
        backgroundColor: purple[300],
        transform: "scale3d(1.05, 1.05, 1)",
        transition: "transform 0.15s ease-in-out"
    },
}));

//bullet point
const bullet = (
    <CheckCircleIcon
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </CheckCircleIcon>
  );

const DisplayCard = ({ }) => {

    return (
        <ProductCard 
            variant='outlined' 
            style={{
                borderRadius: '15px',
                width: '35vh'
            }}
            sx={{
                boxShadow: 1,
                borderRadius: '15px',
                p: 2,
                minWidth: 300,
            }}
        >
            <Card 
                sx={{ 
                    minWidth: 275, 
                    borderRadius: '15px',
                    p: 2, 
                }}
            >
                <CardContent>
                    <Grid
                        container
                        spacing={6}
                        direction="row"
                        alignItems="center"
                        sx={{
                            justifyContent:"center",
                        }}
                    >
                        <Grid 
                            item xs={18} 
                            style={{ 
                                display: "flex", 
                                gap: "1rem" 
                            }}
                        >
                            <AppsIcon/>
                            <Typography variant="h5" component="div">
                                Header                                
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography 
                        sx={{ 
                            justifyContent: 'flex-end', 
                            mb: 1.5 
                        }} 
                        color="text.secondary" 
                        component="div" 
                        noWrap
                    >
                        Imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                    </Typography>
                    
                            
                    <Typography variant="h4" component="div">
                        $199 / month
                    </Typography>
                    
                    <Typography 
                        variant="body2" 
                        component="div"
                        sx={{
                            fontSize: 20,
                            mt: 1.5 
                        }}
                    >
                        Whats Included: <br/>
                        <Typography 
                        variant="body2" 
                        component="div"
                        sx={{
                            fontSize: 17,
                            mt: 1.5 
                        }}
                    >
                        <CheckCircleIcon/> item 1 <br/>
                        <CheckCircleIcon/> item 2 <br/>
                        <CheckCircleIcon/> item 3 <br/>
                        <CheckCircleIcon/> item 4 <br/>
                    </Typography>
                        
                    </Typography>
                </CardContent>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    sx={{
                        justifyContent:"center",
                    }}
                >
                    <Grid
                        item
                    >
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Grid>
                    
                    <Grid
                        item
                    >
                        <Button_Custom button_name={'Inquire More'}/>
                    </Grid>
                    
                </Grid>
            </Card>
        </ProductCard>
    )
}

export default DisplayCard;
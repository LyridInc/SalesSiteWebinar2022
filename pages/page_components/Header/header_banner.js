import { Grid, Typography, Paper, CardMedia } from "@mui/material";
import { purple, blue } from "@mui/material/colors";
import PropTypes from 'prop-types';

const Header_Banner = ({header_line, secondary_line, background_color, font_color}) =>{

    return(
        <Grid
            container            
            justifyContent='center'
            sx={{
                width: '100vw',
                height: '20vh',
                background: purple[900],
            }}
            style={{
                display: 'flex',
                alignItems: 'center',
                
            }}
        >
          <Grid
                item
                xs={8}
            >                
                <Typography fontFamily='Segoe UI' style={{fontSize: '40px', fontWeight: 'bold', color: blue[100]}}>
                    Pricing Calculator
                </Typography>
                <Typography fontFamily='Segoe UI' style={{fontSize: '20px', color: blue[300]}}>
                    Setup Monthly or Yearly Price Plan Picked by You
                </Typography>
            </Grid>
            
        </Grid>
    )
}

Header_Banner.propTypes = {
    header_line: PropTypes.string,
    secondary_line: PropTypes.string,
    background_color: PropTypes.any,
    font_color: PropTypes.any,
}

export default Header_Banner;
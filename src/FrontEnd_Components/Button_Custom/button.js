import PropTypes from 'prop-types';
import { Button, ButtonProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const Button_Custom = ({ button_name, color_status, size}) => {

    return (
        <ColorButton variant='contained' size={size} style={{borderRadius: '10px', backgroundColor: color_status}}>
            <Typography style={{fontSize: '13px', color: purple[50]}}>
                {button_name}   
            </Typography>
        </ColorButton>
    )
}

Button_Custom.propTypes = {
    button_name: PropTypes.string,
    size: PropTypes.string,
    color_status: PropTypes.string,
}

export default Button_Custom;
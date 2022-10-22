import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Card, Typography, CardContent, CardMedia, CardHeader, CardActions, Avatar, IconButton, Grid, Button, } from '@mui/material';
import { purple, blue } from '@mui/material/colors';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button_Custom from '../../FrontEnd_Components/Button_Custom/button';
import Image from 'next/image';

// importing icons from icons folder
import Basic from './icons/Basic.png';
import Pro from './icons/Pro.png';
import Enterprise from './icons/Enterprise.png';

import BYOD from './icons/BYOD.png';
import Lyrid from './icons/Lyrid.png';

import Cometa from './icons/Cometa.jpg';
import P3ID from './icons/P3iD.png';
import Secops from './icons/Secops.png';

const DisplayPriceCard = ({ name, data, set_item_func }) => {
    
    const [hover_status, setHoverStatus] = useState(true);
    const [set_icon, setIcon] = useState();
    const [set_descrip, setDescription] = useState( data?.description?.split("\n") );
    
    const [add_status, setAddStatus] = useState(false);

    const open_message = () => {
        setHoverStatus(!hover_status);
    }

    useEffect(() => {
        // if(data.icon != null){
        //     let icon_array = data?.icon.split(":\"");
        //     let icon_path = icon_array[1].split("\"");
        //     setIcon(icon_path[0]);
        // }
        // else{
        //     setIcon('')
        // }
        let description_array = data?.description?.split("\n");
        setDescription(description_array);
        switch(name){
            case "Basic": 
                return setIcon(Basic);
            case "Pro": 
                return setIcon(Pro);
            case "Enterprise": 
                return setIcon(Enterprise);

            case "BYOD": 
                return setIcon(BYOD);
            case "Lyrid": 
                return setIcon(Lyrid);
                        
            case "Cometa": 
                return setIcon(Cometa);
            case "P3iD": 
                return setIcon(P3ID);
            case "Secops": 
                return setIcon(Secops);
        }
    }, [data])

    const setStateInfo = (event) =>{
        setAddStatus(!add_status);
        set_item_func(data);
    }

    return (
        <Card sx={{ width: 300, height: 280, bgcolor: '#fdfbff' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: purple[100] }} >
                    { set_icon && <Image
                        src={set_icon}
                        alt={name}
                        layout='fill'
                    />}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                    <MoreVertIcon />
                    </IconButton>
                }
                title={
                    <Typography style={{fontSize: '20px', fontWeight: 'bold', color: blue[800]}}>
                        {name}
                    </Typography>
                }
                subheader={
                    <Typography style={{fontSize: '12px', fontWeight: 'bold', color: blue[400]}}>
                        {data.secondary_description}
                    </Typography>
                }
            />
            <CardContent
                style={{
                    overflowY: 'auto',
                    background: '#f6efff'
                }}
                sx={{
                    pt: 3,
                    height: 130,
                }}
            >
                {set_descrip?.map(((sentence, index) => {
                    return(
                        <div key={index}>
                            <Typography fontFamily='Segoe UI' style={{fontSize: '13px', fontWeight: 'bold',color: purple[300]}}>
                                <CheckBoxIcon style={{fontSize: '11px', color: purple[300]}}/>
                                &ensp;{sentence}
                            </Typography>            
                        </div>
                    )
                }))}
            </CardContent>
            <Grid
                container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                sx={{
                    pt: 2,
                    pl: 1.5
                }}
            >
                <Grid
                    item
                    xs={8.5}
                >
                </Grid>
                <Grid
                    item
                    xs={1}
                    onClick={setStateInfo}
                >
                    <Button_Custom button_name={'Add'} size={'small'} color_status={add_status ? purple[700]: purple[700]}></Button_Custom>
                </Grid>
            </Grid>  
        </Card>
    )
}

DisplayPriceCard.propTypes = {
    name: PropTypes.string,
    data: PropTypes.any,
    set_item_func: PropTypes.func,
}

export default DisplayPriceCard;
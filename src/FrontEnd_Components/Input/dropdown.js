import { useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types';
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Grow, Popper, Paper, Grid, Typography, MenuItem, MenuList, Stack, Button } from '@mui/material';

const DropDownMenu = ({ drop_menu, price_update }) => {
    const [selected, setSelected] = useState('Select')
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
  
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    
    const handleSet = (event) => {
    //   if (anchorRef.current && anchorRef.current.contains(event.target.value)) {
    //     return;
    //   }

        if(event.target.value != undefined){
            setSelected(event.target.textContent)

            // Get state and update price from [pricing_calculator.js]
            Object.keys(drop_menu.list).map((index, item) => {
                if(event.target.textContent == drop_menu.list[index].tier_list){
                    price_update(drop_menu.list[index].price)
                }
            })
        }
        setOpen(false);
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
  
    useEffect(() => {
        console.log(drop_menu)
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        
        prevOpen.current = open;
    }, [open]);
    
    return (
    <Stack 
        direction="column" 
        spacing={2}
    >
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            sx={{
                justifyContent:"right"
            }}
        >
            <Grid 
                item
            >
                <Typography variant="h8" color="common.white">
                    {drop_menu.tier_list} : 
                </Typography>
            </Grid>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={{
                    background: '#c57dff',
                }}
            >   
                <Typography variant="h8" color="common.white">
                    {selected}
                </Typography>  
            </Button>
        </Grid>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                style={{zIndex: 5 }} 
                >
                    {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                        transformOrigin:
                            placement === "bottom-start" ? "left top" : "right top"
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleSet}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    style={{zIndex: 1251 }} 
                                >
                                    {Object.keys(drop_menu.list).map((index, item) => {
                                        return(
                                            <div key={index}>
                                                <MenuItem onClick={handleSet}>{drop_menu.list[index].tier_list}</MenuItem>
                                            </div>   
                                        )
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                    )}
                </Popper>
        </Stack>
    )
}

DropDownMenu.PropType = {
    drop_menu: PropTypes.object,
    price_update: PropTypes.func,
}

export default DropDownMenu
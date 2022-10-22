import { Card, Grid, Typography, Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import PropTypes from 'prop-types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const Estimate_Quote = ({ hardware_list, tier_list, solutions_list, hardware_rem, tier_rem, solutions_rem }) =>{
    const remove_hardware = (id) =>{
        hardware_rem(id);
    }
    const remove_tier = (id) =>{
        tier_rem(id);
    }
    const remove_solutions = (id) =>{
        solutions_rem(id);
    }

    return (
        <Card
            sx={{
                width: 'auto',
                height: 'auto',
                borderRadius: 0,
            }}
        >  <Grid
                container
                direction="column"
                alignItems="center"
            >
                <Grid
                    item
                >
                    <Card
                        sx={{
                            width: '70vw',
                            height: 'auto',
                        }}
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            sx={{
                                pt: '3%',
                                pb: 5,
                                pl: 5,
                            }}
                        >
                            <Grid
                                item
                                container
                                alignItems="center"
                                sx={{
                                    justifyContent:"flex-start",
                                }}
                                xs={0}
                            >
                                <Grid
                                    item
                                >
                                    <Typography style={{fontSize: '35px',fontWeight: 'bold', color: purple[700]}} >
                                        Your Estimated Quote
                                    </Typography>
                                    
                                    {hardware_list?.map((index) =>{
                                        return(
                                            <Grid 
                                                item
                                                container 
                                                direction="row" 
                                                xs={12}
                                                sx={{
                                                    alignItems: 'center',
                                                    width: '50vw',
                                                    pt: 2,
                                                    pb: 2,
                                                }}
                                                key={index.Id}
                                            >  
                                                <Button>
                                                    <ExpandCircleDownIcon/>
                                                </Button>
                                                <Grid
                                                    item
                                                    xs
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        {index.hardware_list}
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={3}
                                                >
                                                    <Button onClick={() => remove_hardware(index.Id)}>
                                                        <DeleteForeverIcon/>
                                                    </Button>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={0}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        Upfront Cost:&nbsp;
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={1}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        $0
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={0}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        Monthly Cost:&nbsp;
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={0}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        ${index.price}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        )
                                    })}
                                    {tier_list?.map((index) =>{
                                        return(
                                            <Grid 
                                                item
                                                container 
                                                direction="row" 
                                                xs={12}
                                                sx={{
                                                    alignItems: 'center',
                                                    width: '50vw',
                                                    pt: 2,
                                                    pb: 2,
                                                }}
                                                key={index.Id}
                                            >  
                                                <Button>
                                                    <ExpandCircleDownIcon/>
                                                </Button>
                                                <Grid
                                                    item
                                                    xs
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        {index.tier_list}
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={3}
                                                >
                                                    <Button onClick={() => remove_tier(index.Id)}>
                                                        <DeleteForeverIcon/>
                                                    </Button>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={0}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        Upfront Cost:&nbsp;
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={1}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        $0
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={0}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        Monthly Cost:&nbsp;
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={0}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        ${index.price}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        )
                                    })}
                                    {solutions_list?.map((index) =>{
                                        return(
                                            <Grid 
                                                item
                                                container 
                                                direction="row" 
                                                xs={12}
                                                sx={{
                                                    alignItems: 'center',
                                                    width: '50vw',
                                                    pt: 2,
                                                    pb: 2,
                                                }}
                                                key={index.Id}
                                            >  
                                                <Button>
                                                    <ExpandCircleDownIcon/>
                                                </Button>
                                                <Grid
                                                    item
                                                    xs
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        {index.solution_list}
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={3}
                                                >
                                                    <Button onClick={() => remove_solutions(index.Id)}>
                                                        <DeleteForeverIcon/>
                                                    </Button>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={0}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        Upfront Cost:&nbsp;
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={1}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        $0
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={0}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        Monthly Cost:&nbsp;
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={0}
                                                >
                                                    <Typography style={{fontSize: '18px', color: purple[700]}} >
                                                        ${index.price}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Card>
    )
}

Estimate_Quote.propTypes = {
    hardware_list: PropTypes.any, 
    tier_list: PropTypes.any, 
    solutions_list: PropTypes.any,
    hardware_rem: PropTypes.any, 
    tier_rem: PropTypes.any,
    solutions_rem: PropTypes.any,
}

export default Estimate_Quote;
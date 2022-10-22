import { useState, useEffect } from 'react';
import { Card, Paper, Box, Grid, Typography, Divider, List, Button, Tab, Tabs, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';
import { purple, blue } from '@mui/material/colors';
import ProductCard from './Calculator_Components/Product_Card';
import Tab_Vert from '../../../src/FrontEnd_Components/Tab_Component/Tab_Vert';
import Tab_Hori from '../../../src/FrontEnd_Components/Tab_Component/Tab_Hori';
import Estimate_Quote from './Calculator_Components/Estimate_Quote';
import Contact_Us from '../Contact_Us/contact_us';

const Calculator_Page = ({ product_data, solution_data, hardware_data, }) =>{   
  
    // List for each and every individual components to set
    // It is accessed and controlled for Estimate_Quote.js    
    // Feel free to add whichever hooks you would need for your personal projects!
    const [solutions_list, setSolutionList] = useState([]);
    const [hardware_list, setHardwareList] = useState([]);
    const [tier_list, setTierList] = useState([]);
    
    const [grand_total, setTotal] = useState(0);

    const [tab_pages, setTabPage] = useState(0);
    const [tab_products, setTabProducts] = useState(0);

    const renderSwitch_horiz = (param) =>{
        setTabPage(param);
    }

    const renderSwitch_vert = (param) =>{
        console.log("vertical value param: ", param);

        setTabProducts(param);
    }

    const Solutions_List = (data) => {
        if (solutions_list?.length == 0){
            setSolutionList([...solutions_list, data]);
        }
        else{
            let found = solutions_list?.find(object => object.Id == data.Id)
            if(found === undefined){
                setSolutionList([...solutions_list, data]);
            }           
        }
    }

    const Hardware_List = (data) => {
        if (hardware_list?.length == 0){
            setHardwareList([...hardware_list, data]);
        }
        else{
            let found = hardware_list?.find(object => object.Id == data.Id)
            if(found === undefined){
                setHardwareList([...hardware_list, data]);
            }           
        }
    }

    const Tier_List = (data) => {
        if (tier_list?.length == 0){
            setTierList([...tier_list, data]);
        }
        else{
            let found = tier_list?.find(object => object.Id == data.Id)
            if(found === undefined){
                setTierList([...tier_list, data]);
            }           
        }
    }

    const remove_from_solutions_list = (list_Id) =>{
        setSolutionList(solutions_list.filter(item => item.Id !== list_Id));
    }

    const remove_from_hardware_list = (list_Id) =>{
        setHardwareList(hardware_list.filter(item => item.Id !== list_Id));
    }

    const remove_from_tier_list = (list_Id) =>{
        setTierList(tier_list.filter(item => item.Id !== list_Id));
    }
    
    const grandTotal = () => {
        let total = 0;
        solutions_list?.forEach(function(d) {
            total += parseInt(d.price);
        });
        hardware_list?.forEach(function(d) {
            total += parseInt(d.price);
        });
        tier_list?.forEach(function(d) {
            total += parseInt(d.price);
        });
        setTotal(total);
        return total;
    };

    function Horiz_Controller(){
        switch(tab_pages){
            case 0: return <Tab_Vert controller={renderSwitch_vert}/>;
            case 1: return <Contact_Us/>
            default: return <div/>
        }
    }

    function Products_Controller(){
        if(tab_pages == 0){
            switch(tab_products){
                case 0: return <ProductCard data={product_data} set_item_func={Tier_List}/>;
                case 1: return <ProductCard data={hardware_data} set_item_func={Hardware_List}/>;
                case 2: return <ProductCard data={solution_data} set_item_func={Solutions_List}/>;
                default: return <div/>
            }
        }
        else{
            return <div/>
        }
    }

    return (
        <Grid
            container
            sx={{
                height: 'auto',
                maxWidth: "100%",
                background: '#f4f2ff',
                justifyContent:"center",
            }}
        >            
            <Grid
                item
                sx={{
                    pt: '5%',
                }}
            >
                <Card
                    sx={{
                        width: '60vw',
                        height: 'auto',
                        // background: '#ebe7ff',
                        borderRadius: 0,
                        pb: 4,
                    }
                }>
                    <Grid
                        item
                    >
                        <Tab_Hori renderSwitch={renderSwitch_horiz}></Tab_Hori>
                    </Grid>
                    <Grid                    
                        item
                        container
                        direction='row'
                        spacing={2}
                        style={{ display: "flex", justifyContent: "flex-start" }}
                    >
                        <Grid
                        // border={1}
                            item
                            // style={{p: 5}}
                        >
                            {Horiz_Controller()}
                        </Grid>
                        <Box>
                            {Products_Controller()}
                        </Box>
                        <Box>
                        <Estimate_Quote hardware_list={hardware_list} tier_list={tier_list} solutions_list={solutions_list} hardware_rem={remove_from_hardware_list} tier_rem={remove_from_tier_list} solutions_rem={remove_from_solutions_list}/>;
                        </Box>
                    </Grid>         
                    <Grid container direction='row' item xs={4}>
                        <Grid
                            item
                            xs
                            style={{ display: "flex", justifyContent: "flex-start" }}
                        >
                            <Button sx={{background: "#f4f2ff" }} onClick={grandTotal} >
                            <Typography style={{fontSize: '18px', color: purple[700]}} >
                                Calculate Total
                            </Typography>
                        </Button>
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            container
                            direction="column"
                            alignItems="flex-end"
                            justify="flex-end"
                            style={{ display: "flex", justifyContent: "flex-end" }}
                        >
                        <Typography style={{fontSize: '18px', color: purple[700]}} >
                            ${grand_total}.00 Per Month
                        </Typography>
                        </Grid>
                        
                    </Grid>           
                </Card>
            </Grid>
        </Grid>
    )
}

Calculator_Page.propTypes = {
    product_data: PropTypes.object, 
    solution_data: PropTypes.object, 
    hardware_data: PropTypes.object,
}

export default Calculator_Page;


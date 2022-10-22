import { Grid, Box } from "@mui/material"
import PropTypes from 'prop-types';
import DisplayPriceCard from "../../../../src/components/calculator_cards/calculator_card";

const ProductCard = ({ data, set_item_func }) => {
    return (
        <Box sx={{ mx: "auto", p: 3, width: '50vw', flexGrow: 1 }}>
            <Grid
                item
                container
                spacing={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 3 }} columns={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 12 }}
            >
                {data?.list.map((index) => (
                    <Grid item xs={4} sm={4} md={4} key={index.Id}>
                        <DisplayPriceCard name={Object.values(index)[1]} data={index} set_item_func={set_item_func}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

ProductCard.propTypes = {
    data: PropTypes.any, 
    manage_price_state: PropTypes.any, 
    hook_state: PropTypes.any, 
}

export default ProductCard;
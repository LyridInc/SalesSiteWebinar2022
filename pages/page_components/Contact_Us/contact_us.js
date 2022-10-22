import { Grid, Typography, Box, alpha } from "@mui/material"
import Image from "next/image";
import Lyrid_Logo from './/lyrid_logo.png';
import US_flag from './/us_flag.jpg';
import Indo_flag from './/indo_flag.jpg';

const Contact_Us = () =>{

    return(
        <Grid
            style={{ 
            height: '80vh',
        }}>
            <Grid 
                container 
                spacing={8}
                direction="row"
                alignItems="flex-start"
                sx={{
                    justifyContent:"center",
                    pt: 8
                }}
            >
                <Grid
                    item
                    sx={{
                        justifyContent:"center",
                        pt: 2,
                    }}
                    style={{
                        width: '20vw'
                    }}
                >
                    <Image src={Lyrid_Logo}/>
                    <Typography fontSize={16} style={{wordWrap: true,}} variant="h4" >
                        Lyrid is a multi-cloud solution which makes cloud native developments automated and affordable. 
                        With Lyrid, development teams can innovate affordably, increase cloud vendor flexibility and test new ideas without disrupting existing processes.
                    </Typography>
                </Grid>
                <Grid
                    item
                    sx={{
                        justifyContent:"center",
                        pt: 2,
                    }}
                    style={{
                        width: '20vw'
                    }}
                    xs={3}
                >
                    <Grid
                        container
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid
                            item
                        >
                            <div style={{borderRadius: '50px', overflow: 'hidden', width: 50, height: 30}}>
                                <Image src={US_flag} width={50} height={30}/>
                            </div>
                        </Grid>
                        <Grid
                            item
                        >
                            <Typography fontSize={16} style={{wordWrap: true,}} variant="h4" >
                                US Location:
                            </Typography>
                        </Grid>
                    </Grid>
                        99 South Almaden Blvd. Suite 600
                        San Jose, CA
                        95113
                </Grid>
                <Grid
                    item
                    sx={{
                        justifyContent:"center",
                        pt: 2,
                    }}
                    style={{
                        width: '20vw'
                    }}
                    xs={3}
                >
                    <Grid
                        container
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid
                            item
                        >
                            <div style={{borderRadius: '50px', overflow: 'hidden', width: 50, height: 30}}>
                                <Image src={Indo_flag} width={50} height={30}/>
                            </div>
                        </Grid>
                        <Grid
                            item
                        >
                            <Typography fontSize={16} style={{wordWrap: true,}} variant="h4" >
                                Indonesia Location:
                            </Typography>   
                        </Grid>
                    </Grid>
                        Jl. Pluit Indah 168B-G, Pluit Penjaringan,
                        Jakarta Utara, DKI Jakarta
                        14450
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact_Us;
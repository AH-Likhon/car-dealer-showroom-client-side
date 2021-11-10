import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/login-bg.png';
import man from '../../../images/man.png';
import woman from '../../../images/woman.png';

const adBanner = {
    background: `url(${bg})`,
    // backgroundColor: 'rgba(45, 58, 74, 0.9)',
    // backgroundBlendMode: 'darken, luminosity',
    // marginTop: 175
    // backgroundPosition: 'cover',
    // backgroundRepeat: 'no-repeat',
    height: '450px'
}

const AdBanner = () => {
    return (
        <Grid container spacing={5}>
            <Grid style={{ backgroundColor: '#000' }} item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <img src={woman} alt="" />
                    <div>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>ARE YOU LOOKING FOR A CAR?</Typography>
                        <Typography variant="p" sx={{ color: 'white', mb: 2 }}>
                            Search your car in our Inventory and request a quote on the vehicle of your choosing.
                        </Typography>
                        <Button sx={{ textDecoration: 'none', backgroundColor: '#cf2626d6', color: 'white', width: '100px', mt: 2 }}>Search</Button>
                    </div>
                </Box>
            </Grid>

            <Grid style={{ backgroundColor: '#cf2626d6' }} item xs={12} md={6}>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>

                    <div>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>ARE YOU LOOKING FOR A CAR?</Typography>
                        <Typography variant="p" sx={{ color: 'white', mb: 2 }}>
                            Search your car in our Inventory and request a quote on the vehicle of your choosing.
                        </Typography>
                        <Button sx={{ textDecoration: 'none', backgroundColor: 'white', color: '#cf2626d6', width: '100px', mt: 2 }}>Contact</Button>
                    </div>

                    <img src={man} alt="" />
                </Box>
            </Grid>
        </Grid>
    );
};

export default AdBanner;
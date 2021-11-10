import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
// import bg from '../../../images/s-1.jpg';
// import bg from '../../../images/s-2.jpg';
import bg from '../../../images/s-3.jpg';
// import bg from '../../../images/s-4.jpg';
// import bg from '../../../images/s-5.jpg';

const homeBanner = {
    background: `url(${bg})`,
    // backgroundColor: 'rgba(45, 58, 74, 0.9)',
    // backgroundBlendMode: 'darken, luminosity',
    // marginTop: 175
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '450px'
}


const Banner = () => {
    return (
        <Box style={homeBanner} sx={{ flexGrow: 1, mt: -8, zIndex: 0, padding: '250px 0px 10px 30px ' }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left',

                }}>
                    <Box>
                        <Typography variant="h3" style={{ color: 'white', textTransform: 'uppercase', fontWeight: 'bold' }}>
                            We have everything <br /> your car needs!
                        </Typography>
                        {/* <Typography variant="h6" sx={{ my: 1 }} style={{ width: '50%', color: 'white', fontSize: 14, fontWeight: 400 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.
                        </Typography> */}
                        <Button variant="contained" style={{ backgroundColor: 'rgb(0 0 0 / 52%)' }}>Discover More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;
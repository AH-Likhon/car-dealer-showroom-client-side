import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, py: 5, backgroundColor: '#9BA59D' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={12} sm={6} md={4}>
                    <img src={logo} alt="logo" />
                    <Typography variant="p" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Copyright@2021. All rights reserved by Md. AH Likhon.
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Recent News
                    </Typography>

                    <Link sx={{ color: 'text.primary' }} href="/" underline="none"><Button color="inherit">FAQ</Button></Link>
                    <br />
                    <Link sx={{ color: 'text.primary' }} href="/" underline="none"><Button color="inherit">Support Center</Button></Link>
                    <br />
                    <Link sx={{ color: 'text.primary' }} href="/" underline="none"><Button color="inherit">Payment Security</Button></Link>
                    <br />
                    <Link sx={{ color: 'text.primary' }} href="/" underline="none"><Button color="inherit">Privacy Policy</Button></Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Subscribe
                    </Typography>
                    <TextField label="Email" type="email" id="outlined-size-normal" defaultValue="Email" />
                    <br />
                    <Button style={{ backgroundColor: '#cf2626d6', color: 'white', marginTop: '5px' }} variant="contained" color="inherit">Subscribe</Button>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;
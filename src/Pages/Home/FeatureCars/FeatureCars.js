import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Divider, Button, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import FeatureCar from '../FeatureCar/FeatureCar';

const FeatureCars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allCars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ textAlign: 'center', my: 5 }}>
                <Typography sx={{ fontWeight: 400, color: 'text.secondary' }} variant="p" component="div">
                    Check Out Our Recent Cars
                </Typography>
                <Typography sx={{ fontWeight: 500 }} variant="h4" component="div">
                    FEATURE CAR
                </Typography>
                <Divider sx={{ width: '100px', p: 0, m: '4px auto', border: '1px solid red' }} />
                <Divider sx={{ width: '150px', p: 0, m: '2px auto', border: '1px solid red' }} />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        cars.slice(0, 6).map(car => <FeatureCar
                            key={car._id}
                            car={car}
                        ></FeatureCar>)
                    }
                </Grid>
                <Link href="/allCars" sx={{ width: '150px' }} underline="none">
                    <Button style={{ textDecoration: 'none', backgroundColor: '#cf2626d6', color: 'white', width: '100px', marginTop: '50px' }}>more Cars</Button>
                </Link>
            </Container>
        </Box>
    );
};

export default FeatureCars;
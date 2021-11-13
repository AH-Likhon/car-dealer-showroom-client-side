import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import FeatureCar from '../Home/FeatureCar/FeatureCar';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const AllCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://polar-inlet-21575.herokuapp.com/allCars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navigation></Navigation>

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
                        cars.map(car => <FeatureCar
                            key={car._id}
                            car={car}
                        ></FeatureCar>)
                    }
                </Grid>
            </Container>

            <Footer></Footer>
        </Box>
    );
};

export default AllCars;
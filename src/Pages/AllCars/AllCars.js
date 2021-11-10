import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import FeatureCar from '../Home/FeatureCar/FeatureCar';

const cars = [
    {
        id: 1,
        model: '2017 Audi A4 Prestige',
        oldPrice: '48,950.00',
        newPrice: '48,450.00',
        details: 'The Audi A4’s 2017 redesign looks subtle at first glance, or even second. But the devil is in the details, and those details make this Audi a strong choice in a crowded class. The A4 isn’t the best-handling car in its competitive set, but it’s among the quickest, with a lot of technology and surprising value to boot.The new A4 is on sale now in Premium, Premium Plus and Prestig… Read full review for the 2017 Audi A 4',
        img: 'https://files.fm/thumb_show.php?i=pxyy6g9aq'
    },
    {
        id: 2,
        model: '2016 BMW X1',
        oldPrice: '55,559.00',
        newPrice: '55,000.00',
        details: 'The BMW X1 compact SUV received some visual changes, especially on the dashboard’s center controls, last year. A turbo-diesel xDrive28d version is available in addition to gas-powered models. The five-seat X1 competes with the Audi Q5, Acura RDX and Volvo XC60.',
        img: 'https://files.fm/thumb_show.php?i=fcqpk5r2m'
    },
    {
        id: 3,
        model: '2017 Audi A7 3.0T Prestige Quattro',
        oldPrice: '72,000.00',
        newPrice: '71,375.00',
        details: 'A sporty sedan seating as many as 4 occupants with ease! Top features include leather upholstery, a built-in garage door transmitter, blind spot sensor, and remote keyless entry. Smooth gearshifts are achieved thanks to the 3 liter 6 cylinder engine, and for added security, dynamic Stability Control supplements the drivetrain.',
        img: 'https://files.fm/thumb_show.php?i=v2mgb72r6'
    },
    {
        id: 4,
        model: '2018 Audi Q3 2.0T Prestige',
        oldPrice: '36,555.00',
        newPrice: '37,995.00',
        details: 'The Audi Q3 subcompact crossover SUV debuted as a 2015 model, slotting below the compact Q5. It seats up to five and comes with a 200-horsepower, turbocharged 2.0-liter four-cylinder engine. It is available with front- or all-wheel drive. Rivals in the growing field of small, premium SUVs include the Acura RDX, BMW X1, Buick Encore and Mercedes-Benz GLA-Class.',
        img: 'https://files.fm/thumb_show.php?i=xdrag486g'
    },
    {
        id: 5,
        model: '2017 Audi Q7 3.0T Premium Quattro',
        oldPrice: '67,000.00',
        newPrice: '66,495.00',
        details: 'The Q7 looks less imposing than its predecessor, with taller glass and a six-sided grille that appears both lower and squatter. The two SUVs are dimensionally similar, though curb weight drops considerably with the redesign because Audi swapped a lot of the prior Q7’s steel panels for aluminum. The SUV also rides an all-new platform, which it no longer shares with the Volkswagen Touareg and Porsche Cayenne.',
        img: 'https://files.fm/thumb_show.php?i=2aw7bu3wd'
    },
    {
        id: 6,
        model: '2017 Audi A4 Prestige',
        oldPrice: '48,450.00',
        newPrice: '48,950.00',
        details: 'The Audi A4’s 2017 redesign looks subtle at first glance, or even second. But the devil is in the details, and those details make this Audi a strong choice in a crowded class. The A4 isn’t the best-handling car in its competitive set, but it’s among the quickest, with a lot of technology and surprising value to boot.The new A4 is on sale now in Premium, Premium Plus and Prestig… Read full review for the 2017 Audi A 4',
        img: 'https://files.fm/thumb_show.php?i=r2u9njjej'
    },
]

const AllCars = () => {
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
                        cars.map(car => <FeatureCar
                            key={car.id}
                            car={car}
                        ></FeatureCar>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default AllCars;
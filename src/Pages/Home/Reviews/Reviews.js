import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://car-dealer-server-7tcl.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'rgb(0 0 0 / 22%)' }}>
            <Container sx={{ textAlign: 'center', my: 5, py: 5 }}>

                <Typography sx={{ fontWeight: 500, color: '#222732' }} variant="h4" component="div">
                    Testimonials
                </Typography>
                <Typography sx={{ fontWeight: 400, color: 'text.secondary', mb: 2 }} variant="p" component="div">
                    <span style={{ backgroundColor: '#cf2626d6' }}>Visit one of the largest</span> <span>used car dealerships in the Country. Visit us today.</span>
                </Typography>
                <Divider sx={{ width: '100px', p: 0, m: '4px auto', border: '1px solid red' }} />
                <Divider sx={{ width: '150px', p: 0, m: '2px auto', border: '1px solid red' }} />

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;
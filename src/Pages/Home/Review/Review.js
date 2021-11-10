import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from 'react-rating';

const Review = (props) => {
    const { name, review, ratings } = props.review;
    return (
        <Grid item sx={{ mt: 5 }} xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ color: 'red' }} variant="h6" component="div">
                        {name}
                    </Typography>

                    <Rating
                        style={{ color: 'gold' }}
                        initialRating={ratings}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                    ></Rating>

                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                        <i style={{ color: 'red' }} class="fas fa-quote-left"></i> <span style={{ mt: 5 }}>{review}</span>
                        <i style={{ color: 'red' }} class="fas fa-quote-right"></i>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;
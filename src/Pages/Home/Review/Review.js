import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from 'react-rating';

const Review = (props) => {
    const { userName, star } = props.review;
    return (
        <Grid item sx={{ mt: 5 }} xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ color: 'red' }} variant="h6" component="div">
                        {userName}
                    </Typography>

                    <Rating
                        style={{ color: 'gold' }}
                        initialRating={star}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                    ></Rating>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;
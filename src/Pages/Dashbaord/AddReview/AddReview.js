import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MenuItem from '@mui/material/MenuItem';
import login from '../../../images/login-bg.png';

const bgImage = {
    background: `url(${login})`,
    backgroundPosition: 'cover',
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    height: '100vh'
}

const reviews = [
    {
        value: '5',
        label: '5',
    },
    {
        value: '4',
        label: '4',
    },
    {
        value: '3',
        label: '3',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '1',
        label: '1',
    },
    {
        value: '0',
        label: '0',
    },
];

const AddReview = () => {
    const { user, isLoading } = useAuth();
    const initialReview = { userName: user.displayName, email: user.email, star: '' };
    const [reviewData, setReviewData] = useState(initialReview);
    console.log(reviewData);


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...initialReview };
        newReviewData[field] = value;
        setReviewData(newReviewData);
        // console.log(reviewData);

        e.preventDefault();
    }

    const handleReview = e => {
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviewData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added');
                }
            });
        e.preventDefault();
    }

    // console.log(reviewData);

    return (
        <Grid style={bgImage} sx={{ width: '1150px', marginTop: '-24px', marginLeft: '-25px' }} container >
            <Grid item xs={12} md={12}>
                <Container sx={{ width: '50%', backgroundColor: '#ffffff52', textAlign: 'center', color: 'white', py: 5, mt: 5 }}>
                    <Typography variant="h4" gutterBottom component="div">
                        Submit Your Review
                    </Typography>


                    {!isLoading && <form style={{ marginTop: '30px' }} onSubmit={handleReview}>
                        <TextField
                            disabled
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label={initialReview.userName}
                            type="text"
                            name="userName"
                            value={initialReview.userName}
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            disabled
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label={initialReview.email}
                            type="email"
                            name="email"
                            value={initialReview.email}
                            onChange={handleOnChange}
                            variant="standard"
                        />


                        <TextField

                            sx={{ width: '75%', m: 1, fontSize: '50px' }}
                            id="standard-basic"
                            select
                            label="Select Your Review"
                            // defaultvalue={review}
                            value={reviewData.star}
                            type="number"
                            name="star"
                            onChange={handleOnChange}
                            helperText="Please select your review amount"
                            variant="standard"
                        >
                            {reviews.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>


                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Submit</Button>
                    </form>}

                    {isLoading && <CircularProgress />}
                </Container>
            </Grid>

        </Grid>
    );
};

export default AddReview;
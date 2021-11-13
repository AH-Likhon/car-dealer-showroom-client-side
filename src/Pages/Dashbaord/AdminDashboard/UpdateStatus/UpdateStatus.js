import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import MenuItem from '@mui/material/MenuItem';
// import { useForm } from 'react-hook-form';
import login from '../../../../images/login-bg.png';

const bgImage = {
    background: `url(${login})`,
    backgroundPosition: 'cover',
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    height: '100vh',
}

const reviews = [
    {
        value: 'Pending',
        label: 'Pending',
    },
    {
        value: 'Approved',
        label: 'Approved',
    }
];

const UpdateStatus = ({ row }) => {
    console.log(row);
    // const { _id } = row;
    const { user, isLoading } = useAuth();
    const initialReview = { userName: user.displayName, email: user.email, star: '' };
    const [reviewData, setReviewData] = useState(initialReview);
    // console.log(reviewData);


    const handleOnChange = e => {
        // setReview(e.target.value);
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...initialReview };
        newReviewData[field] = value;
        setReviewData(newReviewData);
        // console.log(reviewData);

        // e.preventDefault();
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
                    // reset();
                    // console.log(data)
                }
            });
        e.preventDefault();
    }

    // console.log(reviewData);

    return (
        <Grid style={bgImage} sx={{ width: 'auto', marginRight: '-24px' }} container spacing={12} >
            <Grid item xs={12} md={12}>
                <Container sx={{ width: '50%', backgroundColor: '#ffffff52', textAlign: 'center', color: 'white', py: 5 }}>
                    <Typography variant="h4" gutterBottom component="div">
                        Update this order
                    </Typography>


                    {!isLoading && <form onSubmit={handleReview}>
                        {/* <TextField
                            disabled
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label={initialReview.userName}
                            type="text"
                            name="userName"
                            value={initialReview.userName}
                            onChange={handleOnChange}
                            variant="standard"
                        /> */}
                        {/* <TextField
                            disabled
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label={initialReview.userName}
                            type="email"
                            name="email"
                            value={initialReview.email}
                            onChange={handleOnChange}
                            variant="standard"
                        /> */}
                        {/* <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Write"
                            type="text"
                            name="review"
                            value={reviewData.review}
                            onChange={handleOnChange}
                            variant="standard"
                        /> */}


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
                    {/* {user?.email && <Alert severity="success">Added Review successfully!</Alert>} */}
                    {/* {authError && <Alert severity="error">{authError}</Alert>} */}
                </Container>
            </Grid>

        </Grid>
    );
};

export default UpdateStatus;
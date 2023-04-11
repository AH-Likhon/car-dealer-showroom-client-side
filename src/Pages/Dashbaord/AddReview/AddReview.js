import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MenuItem from '@mui/material/MenuItem';
import login from '../../../images/login-bg.png';
import Swal from 'sweetalert2';

const bgImage = {
    background: `url(${login})`,
    backgroundPosition: 'cover',
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    height: '100vh'
}

const reviews = [
    {
        value: '0.0',
        label: '0.0',
    },
    {
        value: '0.1',
        label: '0.1',
    },
    {
        value: '0.2',
        label: '0.2',
    },
    {
        value: '0.3',
        label: '0.3',
    },
    {
        value: '0.4',
        label: '0.4',
    },
    {
        value: '0.5',
        label: '0.5',
    },
    {
        value: '0.6',
        label: '0.6',
    },
    {
        value: '0.7',
        label: '0.7',
    },
    {
        value: '0.8',
        label: '0.8',
    },
    {
        value: '0.9',
        label: '0.9',
    },
    {
        value: '1.0',
        label: '1.0',
    },
    {
        value: '1.1',
        label: '1.1',
    },
    {
        value: '1.2',
        label: '1.2',
    },
    {
        value: '1.3',
        label: '1.3',
    },
    {
        value: '1.4',
        label: '1.4',
    },
    {
        value: '1.5',
        label: '1.5',
    },
    {
        value: '1.6',
        label: '1.6',
    },
    {
        value: '1.7',
        label: '1.7',
    },
    {
        value: '1.8',
        label: '1.8',
    },
    {
        value: '1.9',
        label: '1.9',
    },
    {
        value: '2.0',
        label: '2.0',
    },
    {
        value: '2.1',
        label: '2.1',
    },
    {
        value: '2.2',
        label: '2.2',
    },
    {
        value: '2.3',
        label: '2.3',
    },
    {
        value: '2.4',
        label: '2.4',
    },
    {
        value: '2.5',
        label: '2.5',
    },
    {
        value: '2.6',
        label: '2.6',
    },
    {
        value: '2.7',
        label: '2.7',
    },
    {
        value: '2.8',
        label: '2.8',
    },
    {
        value: '2.9',
        label: '2.9',
    },
    {
        value: '3.0',
        label: '3.0',
    },
    {
        value: '3.1',
        label: '3.1',
    },
    {
        value: '3.2',
        label: '3.2',
    },
    {
        value: '3.3',
        label: '3.3',
    },
    {
        value: '3.4',
        label: '3.4',
    },
    {
        value: '3.5',
        label: '3.5',
    },
    {
        value: '3.6',
        label: '3.6',
    },
    {
        value: '3.7',
        label: '3.7',
    },
    {
        value: '3.8',
        label: '3.8',
    },
    {
        value: '3.9',
        label: '3.9',
    },
    {
        value: '4.0',
        label: '4.0',
    },
    {
        value: '4.1',
        label: '4.1',
    },
    {
        value: '4.2',
        label: '4.2',
    },
    {
        value: '4.3',
        label: '4.3',
    },
    {
        value: '4.4',
        label: '4.4',
    },
    {
        value: '4.5',
        label: '4.5',
    },
    {
        value: '4.6',
        label: '4.6',
    },
    {
        value: '4.7',
        label: '4.7',
    },
    {
        value: '4.8',
        label: '4.8',
    },
    {
        value: '4.9',
        label: '4.9',
    },
    {
        value: '5.0',
        label: '5.0',
    },

];

const AddReview = () => {
    const { user, isLoading } = useAuth();
    const initialReview = { userName: user.displayName, email: user.email, };
    const [reviewData, setReviewData] = useState(initialReview);
    console.log(reviewData);


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData[field] = value;
        setReviewData(newReviewData);

        console.log(reviewData);

        e.preventDefault();
    }


    const handleReview = e => {
        fetch("https://car-dealer-server-7tcl.onrender.com/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviewData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // alert('Successfully Added');
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Submited Your Review!',
                        showConfirmButton: false,
                        timer: 1500
                    })
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

                        <TextField
                            sx={{ width: '75%', m: 1, fontSize: '50px' }}
                            id="standard-multiline-static"
                            label="Details About Review"
                            value={reviewData.details}
                            type="text"
                            name="details"
                            onChange={handleOnChange}
                            multiline
                            rows={4}
                            // defaultValue="Default Value"
                            variant="standard"
                        />


                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Submit</Button>
                    </form>}

                    {isLoading && <CircularProgress />}
                </Container>
            </Grid>

        </Grid>
    );
};

export default AddReview;
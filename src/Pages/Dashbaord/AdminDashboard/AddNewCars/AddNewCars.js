import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import bgImage from '../../../../images/login-bg.png';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#ffffff52',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const backgroundImage = {
    background: `url(${bgImage})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    height: '100vh',
    // width: '86vw'
}

const AddNewCars = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("http://localhost:5000/allCars", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            });
        // console.log(data);
    };

    return (
        <Grid style={backgroundImage} sx={{ width: '1150px', marginTop: '-24px', marginLeft: '-25px' }} container>
            <Grid item xs={12} md={12}>
                <Container sx={{ width: '50%', backgroundColor: '#ffffff52', textAlign: 'center', color: 'white', py: 5, mt: 5 }}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {/* {name} */}
                        Add A New Car
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("model")} placeholder="Car Model" style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                        <br />
                        <input {...register("oldPrice")} type="number" placeholder="Old Price" style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                        <br />
                        <input {...register("newPrice")} type="number" placeholder="New Price" style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                        <br />
                        <input {...register("details")} placeholder="Description" style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                        <br />

                        <input {...register("image", { required: true })}
                            placeholder="Image Link" style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }}
                        />
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input style={{ padding: '10px 20px', margin: 2, backgroundColor: '#cf2626d6', border: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '5px', width: '25%' }} type="submit" value="Submit" />
                    </form>
                </Container>
            </Grid>
        </Grid>
    );

};

export default AddNewCars;
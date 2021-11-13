import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import login from '../../images/login-bg.png';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

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

const bgImage = {
    background: `url(${login})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    height: '100vh'
}


const BuyNow = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [orderCar, setOrderCar] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/allCars/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setOrderCar(data))
    }, [orderCar]);


    const onSubmit = (data) => {
        data.email = `${user.email}`;
        data.status = "Pending";
        data.name = `${user.displayName}`;
        data.model = `${orderCar.model}`;
        data.price = `${orderCar.newPrice}`;

        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.insertedId) {
                    alert('Successfully Purchased!');
                    console.log(result);
                    reset();
                }
            });
        // console.log(data);
    };


    return (
        <Box sx={bgImage}>
            <Navigation></Navigation>

            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Buy Now this model " {orderCar?.model} "
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Address" defaultValue="" {...register("address")} style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                    <br />

                    <input placeholder="Phone Number" defaultValue="" {...register("phone")} style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                    <br />

                    <input style={{ padding: '10px 20px', margin: 2, backgroundColor: '#cf2626d6', border: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '5px', width: '25%' }} type="submit" value="Buy Now" />
                </form>
            </Box>

            {/* <Footer></Footer> */}
        </Box>
    );
};

export default BuyNow;
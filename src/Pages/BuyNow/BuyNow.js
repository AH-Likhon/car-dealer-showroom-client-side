import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import login from '../../images/login-bg.png';
import Navigation from '../Shared/Navigation/Navigation';

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
    // const [orders, setOrders] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // const [orders, setOrders] = useState({ userName: user.displayName, email: user.email, car: orderCar?.model, price: orderCar?.newPrice });
    // console.log(orderCar);

    useEffect(() => {
        const url = `http://localhost:5000/allCars/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setOrderCar(data))
    }, [orderCar]);
    // console.log(orderCar);

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

    // const handleOnChange = e => {
    //     // setReview(e.target.value);
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     console.log(field, value);
    //     // const defaultValue = e.target.defaultValue;
    //     const newOrderData = { ...orders };
    //     newOrderData[field] = value;
    //     // newOrderData[field] = defaultValue;
    //     setOrders(newOrderData);
    //     // console.log(reviewData);

    //     // e.preventDefault();
    // }

    // const handlePurchase = e => {
    //     e.status = "Pending";
    //     // const url = `http://localhost:5000/orders/${id}`

    //     fetch('http://localhost:5000/orders', {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(e),
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.insertedId) {
    //                 alert('Successfully Purchased');
    //                 console.log(result);
    //             }
    //             // console.log(result);
    //         });
    //     console.log(e);
    //     e.preventDefault();
    // };

    return (
        <Box sx={bgImage}>
            <Navigation></Navigation>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    {/* {name} */}
                    Buy Now this model " {orderCar?.model} "
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* <input defaultValue={user.displayName} {...register("name", { required: true })} style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                    <br /> */}

                    {/* <input value={user.email} {...register("email", { required: true })} style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                    <br />

                    {errors.exampleRequired && <span className="error">This field is required</span>} */}

                    {/* <input defaultValue={orderCar.model} {...register("model", { required: true })} style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                    <br /> */}

                    {/* <input defaultValue={orderCar.newPrice} {...register("price", { required: true })} style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                    <br /> */}

                    <input placeholder="Address" defaultValue="" {...register("address")} style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                    <br />

                    <input placeholder="Phone Number" defaultValue="" {...register("phone")} style={{ padding: 8, margin: 2, border: 'none', borderRadius: '6px', width: '75%' }} />
                    <br />

                    <input style={{ padding: '10px 20px', margin: 2, backgroundColor: '#cf2626d6', border: 'none', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '5px', width: '25%' }} type="submit" value="Buy Now" />
                </form>

                {/* <form onClick={handlePurchase}>
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="name"
                        value={user.displayName}
                        onChange={handleName}
                        defaultValue={user.displayName}
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="email"
                        value={user.email}
                        onChange={handleOnChange}
                        defaultValue={user.email}
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="model"
                        onChange={handleOnChange}
                        value={orderCar?.model}
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="email"
                        onChange={handleOnChange}
                        value={orderCar?.newPrice}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="text"
                        name="address"
                        // value="Address"
                        onChange={handleOnChange}
                        defaultValue="Address"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        type="number"
                        name="phone"
                        // value="Phone"
                        onChange={handleOnChange}
                        defaultValue="Phone"
                        size="small"
                    />
                    <Button type="submit" variant="contained">Purchase</Button>
                </form> */}


            </Box>
        </Box>
    );
};

export default BuyNow;
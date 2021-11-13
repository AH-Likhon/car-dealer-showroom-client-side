import { Alert, Button, CircularProgress, Container, Grid, OutlinedInput, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login-bg.png';

const bgImage = {
    background: `url(${login})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    height: '100vh'
}

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password1 !== loginData.password2) {
            alert("Your password didn't match");
            return;
        }
        registerUser(loginData.email, loginData.password1, loginData.name, history);

        e.preventDefault();
    }

    return (

        <Grid style={bgImage} container spacing={2} sx={{ mt: 0, zIndex: 0 }}>
            <Grid item xs={12} md={12}>
                <Container sx={{ width: '50%', backgroundColor: '#ffffff52', textAlign: 'center', color: 'white', marginTop: '50px', py: 5 }}>
                    <Typography variant="h4" gutterBottom component="div">
                        Please, Complete Your Registration
                    </Typography>

                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            type="text"
                            name="name"
                            onChange={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnBlur}
                            variant="standard"
                        />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your password"
                            type="password"
                            name="password1"
                            onChange={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Your password"
                            type="password"
                            name="password2"
                            onChange={handleOnBlur}
                            variant="standard"
                        />

                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Register</Button>

                        <br />

                        <NavLink style={{ textDecoration: 'none', width: '50%', m: 1 }} to="/login">
                            <Button sx={{ color: 'white' }} variant="text">Already Registered? Please Login</Button>
                        </NavLink>

                    </form>}

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully Registered!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Container>
            </Grid>

        </Grid>
    );
};

export default Register;
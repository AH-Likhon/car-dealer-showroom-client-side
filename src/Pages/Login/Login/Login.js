import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
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

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (

        <Grid style={bgImage} container spacing={2} sx={{ mt: 0, zIndex: 0 }}>
            <Grid item xs={12} md={12}>
                <Container sx={{ width: '50%', backgroundColor: '#ffffff52', textAlign: 'center', color: 'white', marginTop: '50px', py: 5 }}>
                    <Typography variant="h4" gutterBottom component="div">
                        Please, Login
                    </Typography>

                    {!isLoading && <form onSubmit={handleLogin}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />

                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Login</Button>

                        <br />

                        <NavLink style={{ textDecoration: 'none', width: '75%', m: 1 }} to="/register">
                            <Button sx={{ color: 'white' }} variant="text">New User? Please Register</Button>
                        </NavLink>

                    </form>}

                    <Button onClick={handleGoogleSignIn} variant="contained">Sign in with google</Button>

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Container>
            </Grid>

        </Grid>

    );
};

export default Login;
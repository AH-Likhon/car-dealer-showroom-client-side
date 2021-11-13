import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import logo from '../../../images/logo.png'
import { Button, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static" sx={{ backgroundColor: '#9BA59D', border: 'none', boxShadow: 'none', color: 'white', overFlow: 'hidden', zIndex: 999 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src={logo} alt="logo" />
                    </IconButton>

                    <Typography variant="img" component="div" sx={{ flexGrow: 1 }}>
                        {/* <img src={logo} alt="logo" /> */}
                    </Typography>

                    <Link sx={{ color: 'text.primary' }} href="/allCars" underline="none"><Button color="inherit">All Cars</Button></Link>



                    {
                        user?.email ?
                            <Box>

                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    sx={{ mt: '28px' }}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >

                                    <Link sx={{ color: 'text.primary' }} href="/dashboard" underline="none"><Button onClick={handleClose} color="inherit">{user?.displayName}</Button></Link>
                                    <br />
                                    <Link sx={{ color: 'text.primary' }} href="/dashboard" underline="none"><Button onClick={handleClose} color="inherit">Dashboard</Button></Link>
                                    <br />

                                    <Button onClick={logOut} color="inherit">LogOut</Button>
                                </Menu>
                            </Box>
                            :
                            <Link sx={{ color: 'text.primary' }} href="/login" underline="none"><Button color="inherit">Login</Button></Link>
                    }

                    {/* {
                        user?.email ?
                            <Box>
                                <NavLink to="/dashboard">
                                    <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login">
                                <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Login</Button>
                            </NavLink>
                    } */}

                    {/* {auth && (
                        <Link sx={{ color: 'text.primary' }} href="/login" underline="none">
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <Link sx={{ color: 'text.primary' }} href="/allCars" underline="none"><MenuItem onClick={handleClose}>All Cars</MenuItem></Link>
                                </Menu>
                            </div>
                        </Link>
                    )} */}

                    {/* <Link sx={{ color: 'text.primary' }} href="/login" underline="none">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={auth}
                                        onChange={handleChange}
                                        aria-label="login switch"
                                    />
                                }
                                // label={auth ? 'Logout' : 'Login'}
                                label={auth ? 'Logout' : 'Login'}
                            />
                        </FormGroup>
                    </Link> */}
                    {/* 
                    {
                        auth ?
                            <Box>
                                <NavLink to="/dashboard">
                                    <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login">
                                <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Login</Button>
                            </NavLink>
                    } */}


                </Toolbar>
            </AppBar>
        </Box>

        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static">
        //         <Toolbar>
        //             <IconButton
        //                 size="large"
        //                 edge="start"
        //                 color="inherit"
        //                 aria-label="menu"
        //                 sx={{ mr: 2 }}
        //             >
        //                 <MenuIcon />
        //             </IconButton>
        //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //                 Doctors Portal
        //             </Typography>
        //             {/* <Link to="/appointment"><Button color="inherit">Appointment</Button></Link> */}
        //             <Link to="/about"><Button color="inherit">About</Button></Link>

        //             {/* {
        //                 user?.email ?
        //                     <Box>
        //                         <NavLink to="/dashboard">
        //                             <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Dashboard</Button>
        //                         </NavLink>
        //                         <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logOut} color="inherit">Logout</Button>
        //                     </Box>
        //                     :
        //                     <NavLink to="/login">
        //                         <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Login</Button>
        //                     </NavLink>
        //             } */}

        //         </Toolbar>
        //     </AppBar>
        // </Box>
    );
};

export default Navigation;
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
// import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    // const { user, logOut } = useAuth();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

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

                    <Typography variant="img" component="div" sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="logo" />
                    </Typography>
                    {auth && (
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
                            </Menu>
                        </div>
                    )}

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
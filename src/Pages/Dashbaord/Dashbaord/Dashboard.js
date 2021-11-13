import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MyOrders from '../../Dashbaord/MyOrders/MyOrders';
import MakeAdmin from '../../Dashbaord/AdminDashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../AdminDashboard/ManageAllOrders/ManageAllOrders';
import AddNewCars from '../AdminDashboard/AddNewCars/AddNewCars';
import ManageCars from '../AdminDashboard/ManageCars/ManageCars';
import Navigation from '../../Shared/Navigation/Navigation';
import Pay from '../Pay/Pay';
import AddReview from '../AddReview/AddReview';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            {/* <Divider /> */}
            <Link to={`${url}`} style={{ textDecoration: 'none' }}><Button color="inherit">My Orders</Button></Link>
            {
                !admin && <Box>
                    <Link to={`${url}/addReview`} style={{ textDecoration: 'none' }}><Button color="inherit">Add A Review</Button></Link>
                    <br />
                    <Link to={`${url}/pay`} style={{ textDecoration: 'none' }}><Button color="inherit">Pay</Button></Link>
                    <br />
                    <Link to="/" style={{ textDecoration: 'none' }}><Button onClick={logOut} color="inherit">LogOut</Button></Link>
                </Box>
            }

            {
                admin && <Box>
                    <Link to={`${url}/manageAllOrders`} style={{ textDecoration: 'none' }}><Button color="inherit">Manage All Orders</Button></Link>
                    <Link to={`${url}/addNewCars`} style={{ textDecoration: 'none' }}><Button color="inherit">Add New Cars</Button></Link>
                    <Link to={`${url}/manageCars`} style={{ textDecoration: 'none' }}><Button color="inherit">Manage Cars</Button></Link>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}><Button color="inherit">Make Admin</Button></Link>
                    <br />
                    <Link to="/" style={{ textDecoration: 'none' }}><Button onClick={logOut} color="inherit">LogOut</Button></Link>
                </Box>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Navigation></Navigation>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageCars`}>
                        <ManageCars></ManageCars>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addNewCars`}>
                        <AddNewCars></AddNewCars>
                    </AdminRoute>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/addNewCars`}>
                        <AddNewCars></AddNewCars>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
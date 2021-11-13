import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputLabel, Link, MenuItem, Select } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const ManageAllOrders = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    // console.log(user.email);

    // const [singleOrder, setSingleOrder] = useState({});

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    useEffect(() => {
        const url = `http://localhost:5000/allOrders`;
        fetch(url
            //     ,{
            //     headers: {
            //         'authorization': `Bearer ${token}`
            //     }
            // }
        )
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Succesfully Deleted');
                        const remaining = orders.filter(book => book._id !== id);
                        setOrders(remaining);
                    }
                });
        }
        // console.log(id);
    };




    // const handleOnChange = e => {
    //     const updateValue = e.target.value;
    //     const updateOrder = { ...orders };
    //     setSingleOrder.status = updateValue;
    //     setSingleOrder(updateOrder);
    //     console.log(singleOrder);
    // }

    // useEffect((id) => {
    //     const url = `http://localhost:5000/orders/${id}`;
    //     console.log(id);

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setSingleOrder(data))
    // }, [singleOrder]);

    const handleUpdate = (id) => {
        // const proceed = window.confirm('Do you want to update?');
        // if (proceed) {
        //     fetch(`http://localhost:5000/orders/${id}`, {
        //         method: "PUT",
        //         headers: { "content-type": "application/json" },
        //         body: JSON.stringify(singleOrder)
        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             console.log(data);
        //             if (data.modifiedCount) {
        //                 alert('Succesfully Updated');
        //                 // const remaining = orders.filter(book => book._id !== id);
        //                 // setOrders(remaining);
        //                 setSingleOrder(singleOrder);
        //             }
        //         });
        // }
        console.log(id);
    };

    return (
        <div>
            <h4>Manage All Orders: {orders.length}</h4>
            <TableContainer component={Paper} sx={{ width: { sm: '100%', md: '100%' } }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Car Model</StyledTableCell>
                            <StyledTableCell align="center">Update Status</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <StyledTableRow key={row._id}>
                                {/* <StyledTableCell align="center" component="th" scope="row">
                                    {row.name}
                                </StyledTableCell> */}
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="center">{row.model}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                                        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                        {/* <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={singleOrder?.status}
                                            label={singleOrder?.status}
                                            onChange={() => handleUpdate(row._id)}
                                        >
                                            <MenuItem onChange={() => handleOnChange(row._id)} value="Pending">Pending</MenuItem>
                                            <MenuItem value="Approved">Approved</MenuItem>
                                        </Select> */}
                                        <Link sx={{ color: 'text.primary' }} href={`/updateStatus/${row._id}`} underline="none"><Button style={{ textDecoration: 'none', backgroundColor: '#cf2626d6' }} variant="contained" key={row._id} row={row}>Update</Button></Link>
                                    </FormControl>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button onClick={() => handleDelete(row._id)} style={{ textDecoration: 'none', backgroundColor: '#cf2626d6' }} variant="contained" >Remove</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;
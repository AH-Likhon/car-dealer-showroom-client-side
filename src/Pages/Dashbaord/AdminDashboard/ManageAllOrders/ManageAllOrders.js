import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

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

    const [orders, setOrders] = useState([]);



    useEffect(() => {
        const url = `http://localhost:5000/allOrders`;
        fetch(url)
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



    const handleUpdate = (id) => {
        const proceed = window.confirm('Do you want to update?');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(orders)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.modifiedCount) {
                        alert('Succesfully Updated');
                    }
                });
        }
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
                            <StyledTableCell align="center">Status</StyledTableCell>

                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <StyledTableRow key={row._id}>

                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="center">{row.model}</StyledTableCell>


                                <StyledTableCell align="center">
                                    <Button onClick={() => handleUpdate(row._id)} style={{ textDecoration: 'none', backgroundColor: '#cf2626d6' }} variant="contained" >{row.status}</Button>
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
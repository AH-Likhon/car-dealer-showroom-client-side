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
import Swal from 'sweetalert2';

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
const ManageCars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const url = `https://car-dealer-server-7tcl.onrender.com/allCars`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);

    const handleDelete = (id) => {
        // const proceed = window.confirm('Do you want to delete?');

        Swal.fire({
            title: 'Do you want to delete this car?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://car-dealer-server-7tcl.onrender.com/allCars/${id}`, {
                    method: "DELETE",
                    headers: { "content-type": "application/json" },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully Deleted This Car!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            const remaining = cars.filter(book => book._id !== id);
                            setCars(remaining);
                        }
                    });
            } else if (result.isDenied) {
                Swal.fire("You didn't agree to delete this car!", '', 'info')
            }
        })

        // console.log(id);
    };


    return (
        <div>
            <h4>All Cars: {cars.length}</h4>
            <TableContainer component={Paper} sx={{ width: { sm: '100%', md: '100%' } }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Car Model</StyledTableCell>

                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cars.map((row) => (
                            <StyledTableRow key={row._id}>

                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="center">{row.model}</StyledTableCell>

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

export default ManageCars;
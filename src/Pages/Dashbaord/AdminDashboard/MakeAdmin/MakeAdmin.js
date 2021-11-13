import React, { useState } from 'react';
import { Button, TextField, Alert } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
                // console.log(data);
            });

        e.preventDefault();
    }

    return (
        <div>
            <h2>Make An Admin</h2>

            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '25%', m: 1 }}
                    label="Email"
                    type="email"
                    variant="standard"
                    onBlur={handleOnBlur}
                />
                <br />
                <Button sx={{ m: 1 }} type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin Successfully Added!</Alert>}
        </div>
    );
};

export default MakeAdmin;
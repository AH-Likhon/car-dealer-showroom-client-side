import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';


const FeatureCar = (props) => {
    const { _id, model, oldPrice, newPrice, details, img } = props.car;
    return (
        <Grid item sx={{ mt: 5 }} xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ color: 'red' }} variant="h6" component="div">
                        {model}
                    </Typography>
                    <Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
                        <span style={{ textDecoration: 'line-through', color: 'red' }}>${oldPrice}</span> <span>${newPrice}</span>
                    </Typography>

                    {/* <NavLink to='/buyNow'><Button style={{ textDecoration: 'none' }}>Buy Now</Button></NavLink> */}

                    <Link href={`/buyNow/${_id}`} sx={{ width: '150px' }} underline="none">
                        <Button style={{ textDecoration: 'none', backgroundColor: '#cf2626d6', color: 'white', width: '100px' }}>Buy Now</Button>
                    </Link>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default FeatureCar;
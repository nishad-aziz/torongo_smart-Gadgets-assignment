import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service'
import exchange from '../../../images/exchange.jpg'
import emi from '../../../images/emi.png'
import accessories from '../../../images/accessories.jpg'
import Typography from '@mui/material/Typography';


const services = [
    {
        name: 'exchange your phone',
        description: 'Get a brand new smartphone just exchanging your old one. and boom speed up your mobility.',
        img: exchange
    },
    {
        name: '0% EMI for All products ',
        description: 'EMI is a service that allows you to purchase items through a deferred payment plan using your credit card.',
        img: emi
    },
    {
        name: 'Flagship Accessories',
        description: 'Get exact flagship gadgets for everyday that fits to your smartphone. All the desired love is in single place.',
        img: accessories
    },
]


const Services = () => {
    return (
        <Container>
            {/* <Typography variant="h5" component="div">
                Additional Services
            </Typography> */}
            <Typography sx={{ fontWeight: 600,  color: 'success.main', m:5 }} variant="h4" component="div">
               Additional Services We Provide
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;
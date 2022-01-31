import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../../../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Android Servicing',
        time: '8.00 AM- 10.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'iMac Servicing',
        time: '10.00 AM- 11.50 AM',
        space: 10
    },
    {
        id: 3,
        name: 'Windows Servicing',
        time: '12.00 PM- 1.00 PM',
        space: 5
    },
    {
        id: 4,
        name:
            'iPhone Servicing',
        time: '1.00 AM- 03.00 AM',
        space: 10
    },
    {
        id: 5,
        name: 'Free Servicing',
        time: '3.00 PM- 05.00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'basic phone repair session',
        time: '3.00 PM- 05.00 PM',
        space: 10
    },
]

const Availableappointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 2, fontWeight: 300 }}> available appointments on {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success">Appointment successfull!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default Availableappointments;
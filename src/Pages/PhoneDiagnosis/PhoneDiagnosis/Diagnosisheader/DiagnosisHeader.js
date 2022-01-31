import { Container, Grid } from '@mui/material';
import headBanner from '../../../../images/mobile-servicing.jpg'
import React from 'react';
import Calendar from '../../../Shared/Calendar/Calendar';

const DiagnosisHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate} ></Calendar>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={headBanner} alt="" />

                </Grid>
            </Grid>
        </Container>
    );
};

export default DiagnosisHeader;
import React from 'react';
import Grid from '@mui/material/Grid';
import banner from '../../../images/banner.jpg'
import bg from '../../../images/bg.jpg'
import { Typography, Button, Container, Box } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
    height: '700px'
}
const verticalCenter = {
    display: 'flex',
    height: '600px',
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, marginTop: 10 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left', }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" sx={{ fontWeight: 500, color: "yellow", my: 3 }}>
                            All of Your GSM interests fullfill with us with  All The  <br />
                            best DEALS !
                        </Typography>
                        <Typography variant="h4" sx={{ my: 5, fontSize: 26, fontWeight: 300, color: "gray" }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur architecto nisi, enim nulla harum commodi dignissimos doloribus vitae reiciendis odio explicabo magnam dolore tempore fuga officia fugiat molestias? Quia!
                        </Typography>
                        <Button variant="contained" style={{ my: 5, backgroundColor: '#5CE7ED ' }}>
                            Hot Deals
                        </Button>
                    </Box>

                </Grid>
                <Grid item xs={4} md={6} style={verticalCenter}>
                    <img style={{ width: "900px" }} src={banner} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;
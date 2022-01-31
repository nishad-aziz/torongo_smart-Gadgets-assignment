import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import phonediagnosisleft from '../../../images/phonediagnosisleft.png'
import phonedBackground from '../../../images/phonedBackground.jpg'
import { Button, Typography } from '@mui/material';

const diagnosisBg = {
    background: `url(${phonedBackground})`,
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 250,
    backgroundSize: ' 80%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundBorderRadius: '10px'

}

const PhoneDiagnosisBanner = () => {
    return (
        <div>
            <Box style={diagnosisBg} sx={{ flexGrow: 1, marginBottom: '120px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: 1100, marginTop: '-280px', marginLeft: 60 }}
                            src={phonediagnosisleft} alt="" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" style={{
                            color: 'white',
                            fontSize: '10',
                            fontWeight: '400',
                            marginTop: 100,
                            marginRight: 200
                        }}>
                            The best of Google, <br></br>
                            built around you.
                        </Typography>
                        <br></br>  <br></br>
                        <Typography variant="h5" style={{
                            color: '#505254 ',
                            fontSize: '10',
                            marginRight: 200
                        }} >
                            The smartest and fastest Pixel yet.
                        </Typography>
                        <br></br>  <br></br>
                        <Button variant="contained" style={{ color: 'white ', marginBottom: '90px', marginRight: 200 }}>
                            Detailed Specs
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default PhoneDiagnosisBanner;
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import sideBanner from '../../../images/loginsidebanner.jpg'
import useAuth from '../../../Hooks/useAuth'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained"> Login </Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register">
                            <Button variant="text">New User ? Please Register </Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfull!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>--------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={sideBanner} alt="" />
                </Grid>

            </Grid>


        </Container>
    );
};

export default Login;
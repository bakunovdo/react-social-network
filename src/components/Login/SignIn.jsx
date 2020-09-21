import React from 'react';


import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


import SigninFormik from "./SigninFormik";
import {connect} from "react-redux";

import {Redirect} from "react-router-dom";

import {login} from "../../redux/authReducer";


const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                React Samurai
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    }
}));

const SignIn = (props) => {
    const classes = useStyles();

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <SigninFormik login={props.login} errors={props.errorsMessage} captchaUrl={props.captchaUrl}/>
                <Grid container>
                    <Link href="https://social-network.samuraijs.com/signUp" target={"#"} variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>

            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorsMessage: state.auth.errorsMessage,
        captchaUrl: state.auth.captcha
    }
}

export default connect(mapStateToProps, {login})(SignIn);


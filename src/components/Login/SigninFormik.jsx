import React from "react";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {useFormik} from "formik";

import * as Yup from 'yup';
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});

export const SigninFormik = (props) => {
    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: null
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            props.login(values)
        }
    })

    const [showPassword, setShowPassword] = React.useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
                required
                fullWidth
                autoFocus

                id="email"
                name="email"

                label="Email Address"
                variant="outlined"
                margin="normal"
                autoComplete="email"

                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
            <TextField
                required
                fullWidth

                name="password"
                id="password"

                type={showPassword ? "text" : "password"}
                variant="outlined"
                margin="normal"
                label="Password"
                autoComplete="current-password"

                error={formik.errors.password && formik.touched.password}

                onChange={formik.handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                            >
                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        color="primary"
                        name="rememberMe"

                        onChange={formik.handleChange}
                        value={formik.values.rememberMe}
                    />
                }
                label="Remember me"
            />

            {props.captchaUrl ? (
                <Grid container direction="column" alignItems="center">
                    <img src={props.captchaUrl} alt="captcha"/>
                    <Box mt={2}>
                        <TextField
                            id="captcha"
                            placeholder="Captcha"

                            onChange={formik.handleChange}
                            value={formik.values.captcha}
                        />
                    </Box>
                </Grid>
            ) : null}

            {props.errors ? props.errors.map((textError) => (
                <Box mt={2}>
                    <Alert severity="error"> {textError} </Alert>
                </Box>
            )) : null}

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>
        </form>
    )
}

export default SigninFormik;
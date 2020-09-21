import React from 'react';


import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {withStyles} from '@material-ui/core/styles';
//Icons
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import makeStyles from "@material-ui/core/styles/makeStyles";

import classNames from "classnames";

import {NavLink} from "react-router-dom";

import {connect} from "react-redux";
import {logout} from "../../../redux/authReducer";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    }

}));

const MenuLogin = (props) => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickLogOut = () => {
        props.logout()
    }

    const loginCapital = props.login[0].toUpperCase() + props.login.substring(1)

    return (
        <div>
            <Button
                onClick={handleClick}
                startIcon={<Avatar
                    alt={props.login}
                    src="broken-img.jpg"
                    className={classNames(classes.orange, classes.small)}
                />}
            >
                {loginCapital}
            </Button>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <NavLink to="/profile">
                    <MenuItem>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Profile
                        </ListItemText>
                    </MenuItem>
                </NavLink>

                <NavLink to="/dialogs">
                    <MenuItem>
                        <ListItemIcon>
                            <ChatIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Messages
                        </ListItemText>
                    </MenuItem>
                </NavLink>

                <MenuItem onClick={handleClickLogOut}>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Sign Out
                    </ListItemText>
                </MenuItem>

            </StyledMenu>
        </div>
    )
}

export default connect(null, {logout})(MenuLogin);
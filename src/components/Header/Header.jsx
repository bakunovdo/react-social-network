import React from 'react';
import {NavLink} from "react-router-dom";

import "./Header.scss";
import logo from "../../assets/images/logo.png"
import MenuLogin from "./MenuLogin/MenuLogin";


const Header = (props) => {

    return (
        <header className="header">
            <div className="container">
                <nav className="top-nav">
                    <ul>
                        <li className="active">
                            <NavLink to="/profile">
                                Profile
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dialogs">
                                Messages
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/users">
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="center">
                    <div className="brand-log">
                        <NavLink to="/">
                            <img src={logo} alt="logo"/>
                        </NavLink>
                    </div>
                </div>

                <div className="login">
                    {props.isAuth ? <MenuLogin login={props.login} /> : (
                        <NavLink to="/">
                            <button>Войти</button>
                        </NavLink>
                    )
                    }

                </div>
            </div>
        </header>
    )
}


export default Header

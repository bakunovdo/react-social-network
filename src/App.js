import React from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.scss';

import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import SignIn from "./components/Login/SignIn";
import Music from "./components/Music/Music";
import News from "./components/News/News";


import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (this.props.initialized) {
            return (
                <Router>
                    <div className="app-wrapper">
                        <Route exact path="/" render={() => <SignIn/>}/>
                        <Route exact path="/profile/:userId?"
                               render={() => <ProfileContainer store={this.props.store}/>}/>
                        <Route exact path="/dialogs" render={() => <DialogsContainer store={this.props.store}/>}/>
                        <Route exact path="/users" render={() => <UsersContainer store={this.props.store}/>}/>
                        <Route exact path="/news" render={News}/>
                        <Route exact path="/music" render={Music}/>
                        <Route exact path="/settings" render={Settings}/>
                    </div>
                </Router>
            )
        }

        return null
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const mapDispatchToProps = {
    initializeApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

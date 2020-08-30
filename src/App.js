import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './App.scss';

import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
  return (
      <Router>
        <div className="app-wrapper">
          <Header/>
          <div className="container">
            <SideBar/>
            <Route path="/profile"
                   render={() => <Profile store={props.store} />}
            />
            <Route path="/dialogs"
                   render={() => <DialogsContainer store={props.store}/>}
            />
            <Route path="/users"
                   render={() => <UsersContainer store={props.store} />}
            />

            <Route path="/news" render={News}/>
            <Route path="/music" render={Music}/>
            <Route path="/settings" render={Settings}/>

          </div>
        </div>
      </Router>
  )
}

export default App;

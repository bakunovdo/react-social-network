import React from 'react';
import './Sidebar.scss';
import {NavLink} from "react-router-dom";

import ProfileIcon from "../../assets/images/sidebar/ProfileIcon"
import NewsIcon from "../../assets/images/sidebar/NewsIcon"
import MusicIcon from "../../assets/images/sidebar/MusicIcon";
import MessagesIcon from "../../assets/images/sidebar/MessagesIcon";
import SettingsIcon from "../../assets/images/sidebar/SettingsIcon";
import UsersIcon from "../../assets/images/sidebar/UsersIcon";

const SideBar = () => {

  const iconSize = "16px"

  return (
      <div className="sidebar">
        <nav>
          <ul>
            <li className="active">
              <NavLink to="/profile">
                <ProfileIcon size={iconSize}/>
                <span>Profile</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/news">
                <NewsIcon size={iconSize}/>
                <span>News</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dialogs">
                <MessagesIcon size={iconSize} />
                <span>Messages</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/users">
                <UsersIcon size={iconSize} />
                <span>Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/music">
                <MusicIcon size={iconSize} />
                <span>Music</span>
              </NavLink>
            </li>

            <hr/>

            <li className="settings">
              <NavLink to="/settings">
                <SettingsIcon size={iconSize} />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default SideBar

import React from 'react';

import "./Profile.scss";
import ProfilePerson from "./ProfilePerson/ProfilePerson";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (
      <div className="pageBlock">
        <div className="Profile">
          <ProfilePerson/>
          <MyPostsContainer store={props.store}/>
        </div>
      </div>
  )
}

export default Profile

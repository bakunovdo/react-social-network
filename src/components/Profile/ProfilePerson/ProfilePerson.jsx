import React from 'react';

import "./ProfilePerson.scss";

// import ProfileStatus from "./ProfileStatus/ProfileStatus";

import Skeleton from "@material-ui/lab/Skeleton";
import userPlaceholder from "../../../assets/images/userPlaceholder.jpg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


export const ProfilePerson = (props) => {

    const isPhoto =  props.profile && props.profile?.photos.large
        ? props.profile.photos.large
        : userPlaceholder


    return (
        <div className="container profile-person">
            <div className="profile-person__header">
                <div className="profile-person__picture">
                    {props.isLoading ? <Skeleton variant="circle" width={150} height={150}/>
                        : <img src={isPhoto} alt="profile_pic"/>}
                </div>

                <div className="info">
                    <div className="nameAbout">
                        <div className="fullName">
                            {props.isLoading ? <Skeleton variant="text" width={150} height={20}/> : props.profile.fullName}
                        </div>
                        <ProfileStatusWithHooks isLoading={props.isLoading} status={props?.status || ''} updateStatus={props.updateStatus} />
                    </div>

                    <div className="editProfile">
                        <button>Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

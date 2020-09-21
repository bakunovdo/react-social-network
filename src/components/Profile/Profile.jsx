import React from 'react';

import "./Profile.scss";
import {ProfilePerson} from "./ProfilePerson/ProfilePerson";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import HeaderContainer from "../Header/HeaderContainer";
import profileBackground from "../../assets/images/background-profile.jpg";

import FriendsCard from "./FriendsCard/FriendsCard";
import {Facebook, GitHub, Instagram, Twitter, YouTube} from "@material-ui/icons";

const Profile = (props) => {
    return (
        <div className="pageBlock">
            <div className="Profile">
                <HeaderContainer/>

                <div className="profile-background">
                    <img src={profileBackground} alt=""/>
                </div>

                <ProfilePerson profile={props.profile} isLoading={props.isLoading} status={props.status}
                               updateStatus={props.updateStatus}/>
                <div className="container">
                    <div className="content">
                        <div>
                            <div className="about card">
                                <div className="card__title">
                                    <h4>About Me</h4>
                                </div>

                                <div className="about__content">
                                    Ya react samurai! VJUH VJUH VJUH
                                </div>

                            </div>

                            <FriendsCard/>
                        </div>

                        <MyPostsContainer/>

                        <div className="card socialCard">
                            <div className="card__title">
                                <h4>Socials</h4>
                            </div>

                            <div className="socialCard__content">
                                <div className="socials">
                                    <div className="item">
                                        <Facebook fontSize="large"/>
                                    </div>

                                    <div className="item">
                                        <Twitter fontSize="large"/>
                                    </div>

                                    <div className="item">
                                        <GitHub fontSize="large"/>
                                    </div>

                                    <div className="item">
                                        <Instagram fontSize="large"/>
                                    </div>

                                    <div className="item">
                                        <YouTube fontSize="large"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

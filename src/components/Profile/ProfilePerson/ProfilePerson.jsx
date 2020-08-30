import React from 'react';

import "./ProfilePerson.scss";

const ProfilePerson = () => {
    return (
        <div className="ProfilePerson">
            <div className="profile-header">
                <img
                    src="https://picsum.photos/1200/200"
                    alt=""/>
            </div>

            <div className="profile">

                <div className="profile__img">
                    <img src="https://picsum.photos/200" alt=""/>
                </div>
                <div className="wrapper">
                    <div className="profile-name">Bakunov Danila</div>
                    <hr/>
                    <div className="profile-info">
                        <div className="profile-info-birthday row">
                            <div className="text-about">Birthday:</div>
                            <div className="text-value">15 Jule</div>
                        </div>
                        <div className="profile-info-city row">
                            <div className="text-about">City:</div>
                            <div className="text-value">Moscow</div>
                        </div>
                        <div className="profile-info-education row">
                            <div className="text-about">Studied at:</div>
                            <div className="text-value">MGSU'11</div>
                        </div>
                        <div className="profile-info-site row">
                            <div className="text-about">Website:</div>
                            <div className="text-value">https://github.com/bakunovdo</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePerson

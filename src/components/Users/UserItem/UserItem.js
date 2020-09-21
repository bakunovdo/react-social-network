import React from "react"

import {NavLink} from "react-router-dom";

import "./UserItem.scss";
import userPlaceholder from "../../../assets/images/userPlaceholder.jpg"

import classNames from 'classnames'

const UserItem = (props) => {

    const onToggleFollow = () => {
        props.toggleFollowThunk(props.followed, props.id)
    }


    const btnFollow = classNames({
        'follow': !props.followed,
        'unfollow': props.followed,
        "inFollowing": props.nowFollowingUsers.some(id => id === props.id),
    })

    const userPhoto = props.photo.small || props.photo.large || userPlaceholder

    return (
        <div className="userItem">
            <div className="userItem__inner">
                <div className="userItem-header">
                    <div className="profile-thumb">
                        <img src={userPhoto} alt="avatar"/>
                    </div>

                    <div className="profile-name">
                        <NavLink to={`/profile/${props.id}`}>
                            {props.fullName}
                        </NavLink>
                    </div>
                </div>

                <div className="footer">
                    <button className={btnFollow} onClick={onToggleFollow}
                    >
                        {props.followed ? "Unfollow" : "Follow"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserItem

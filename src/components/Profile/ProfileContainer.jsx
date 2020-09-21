import React from 'react';

import "./Profile.scss";
import Profile from "./Profile";
import {addPost, getStatus, getUserProfile, updateStatus} from "../../redux/profilePageReducer";

import {connect} from "react-redux";
import {withRouter} from "react-router-dom/";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        isLoading: state.profilePage.isLoading
    })
}

const mapDispatchToProps = {
    getUserProfile,
    getStatus,
    updateStatus,
    addPost,
}


const ComposedComponent = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

export default ComposedComponent

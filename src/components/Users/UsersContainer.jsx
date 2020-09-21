import React from "react";
import {connect} from "react-redux";

import {changeUsersPage, getUsers, toggleFollowThunk} from "../../redux/usersPageReducer";

import Users from "./Users";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        this.onPageChanged = (event, pageNumber) => {
            this.props.changeUsersPage(pageNumber, this.props.pageSize)
        }
    }


    render() {
        return <Users {...this.props} onPageChanged={this.onPageChanged}/>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    nowFollowingUsers: state.usersPage.nowFollowingUsers

})

const mapDispatchToProps = {
    getUsers,
    changeUsersPage,
    toggleFollowThunk
}


const ComposedComponent = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersContainer)

export default ComposedComponent
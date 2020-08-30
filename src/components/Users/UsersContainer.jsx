import React from "react";
import {connect} from "react-redux";
import {setCurrentPageAC, setFetchingAC, setTotalUsersCountAC, setUsersAC, toggleFollowAC} from "../../redux/usersPageReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      const params = {
        count: this.props.pageSize,
        page: this.props.currentPage
      }
      this.props.setFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${params.page}&count=${params.count}`)
          .then((response) => {
            this.props.setFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
          })
    }
  }

  onPageChanged = (event, pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setFetching(true)
    const params = {
      count: this.props.pageSize,
      page: pageNumber
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${params.page}&count=${params.count}`)
        .then((response) => {
          this.props.setFetching(false)
          this.props.setUsers(response.data.items)
        })
  }

  render() {
    return <>
      <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          isFetching={this.props.isFetching}

          toggleFollow={this.props.toggleFollow}
      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      dispatch(toggleFollowAC({
        userId: userId
      }))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    setFetching: (isFetch) => {
      dispatch(setFetchingAC(isFetch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)




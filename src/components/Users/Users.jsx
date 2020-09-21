import React from "react"

import "./Users.scss"

import UserItem from "./UserItem/UserItem";
import Pagination from '@material-ui/lab/Pagination';
import Skeleton from "@material-ui/lab/Skeleton";
import SearchIcon from "@material-ui/icons/Search";

import Preloader from "../../assets/images/Loading"
import HeaderContainer from "../Header/HeaderContainer";
import profileBackground from "../../assets/images/background-profile.jpg";

const Users = (props) => {

    const isLoading = !props.profile;

    const usersElements = props.users.map((user) => <UserItem key={"UserItem " + user.id}
                                                              id={user.id}
                                                              photo={user.photos}
                                                              fullName={user.name}
                                                              followed={user.followed}
                                                              nowFollowingUsers={props.nowFollowingUsers}

                                                              toggleFollowThunk={props.toggleFollowThunk}
    />)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    return (
        <div className="pageBlock">
            <div className="Users">
                <HeaderContainer/>

                <div className="profile-background">
                    <img src={profileBackground} alt=""/>
                </div>

                <div className="container profile-person">
                    <div className="profile-person__header">

                        <div className="profile-person__picture">
                            {isLoading ? <Skeleton variant="circle" width={150} height={150}/>
                                : <img src={props.user.photos.large} alt="profile_pic"/>}
                        </div>

                        <div className="header__inner">
                            <div className="leftSide">
                                <div className="user-search">
                                    <input type="text" placeholder="Search" className="user-search-field"/>
                                    <button className="search-btn">
                                        <SearchIcon/>
                                    </button>
                                </div>
                            </div>

                            <div className="pagination">
                                <Pagination count={pagesCount} page={props.currentPage} onChange={props.onPageChanged}
                                            siblingCount={3} boundaryCount={1} defaultPage={1} defaultValue={1}
                                            variant="outlined" color={"secondary"} shape={"rounded"}/>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="blockPeople">
                    <div className="container">
                        <div className="userList">
                            {props.isFetching ? <Preloader/> : usersElements}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Users



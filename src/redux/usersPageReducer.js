import {apiUsers} from "../api/api";

export const TOGGLE_FOLLOW = "users/TOGGLE_FOLLOW"
export const SET_USERS = "users/SET_USERS"
export const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT"
export const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING"
export const TOGGLE_IN_FOLLOWING = "users/TOGGLE_IN_FOLLOWING"

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    nowFollowingUsers: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetch}
        }
        case TOGGLE_IN_FOLLOWING: {
            return {
                ...state,
                nowFollowingUsers: action.isFetching
                    ? [...state.nowFollowingUsers, action.userId]
                    : state.nowFollowingUsers.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

//Actions
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setFetching = (isFetch) => ({type: TOGGLE_IS_FETCHING, isFetch})
export const toggleInFollowing = (isFetching, userId) => ({type: TOGGLE_IN_FOLLOWING, isFetching, userId})

//Thunks
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true))
        apiUsers.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const changeUsersPage = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(setFetching(true))

        apiUsers.getUsers(pageNumber, pageSize).then((data) => {
            dispatch(setFetching(false))
            dispatch(setUsers(data.items))
        })
    }
}
export const toggleFollowThunk = (followed, userId) => {
    return (dispatch) => {
        dispatch(toggleInFollowing(true, userId))
        if (followed) {
            apiUsers.unfollow(userId).then(({resultCode}) => {
                if (resultCode === 0) {
                    dispatch(toggleFollow(userId))
                }
                dispatch(toggleInFollowing(false, userId))
            })
        } else {
            apiUsers.follow(userId).then(({resultCode}) => {
                if (resultCode === 0) {
                    dispatch(toggleFollow(userId))
                }
                dispatch(toggleInFollowing(false, userId))
            })
        }
    }
}


export default usersPageReducer

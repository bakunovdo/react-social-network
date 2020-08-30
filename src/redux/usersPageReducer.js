export const TOGGLE_FOLLOW = "TOGGLE_FOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

// const usersDemo = [
//   {id: 1, name: "Alex Mitchel", status: "hi >?", photos: {small:null}},
//   {id: 2, name: "Alex Mitchel", status: "hi >?", photos: {small:null}},
//   {id: 3, name: "Alex Mitchel", status: "hi >?", photos: {small:null}},
//   {id: 4, name: "Alex Mitchel", status: "hi >?", photos: {small:null}}
// ]

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
}

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {...state, users: [...action.data]}
    }
    case TOGGLE_FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.data.userId) {
            return {...u, followed: !u.followed}
          }
          return u
        })
      }
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.data}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.data}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.data}
    }
    default:
      return state
  }
}

export const toggleFollowAC = (data) => ({type: TOGGLE_FOLLOW, data})
export const setUsersAC = (data) => ({type: SET_USERS, data})
export const setCurrentPageAC = (data) => ({type: SET_CURRENT_PAGE, data})
export const setTotalUsersCountAC = (data) => ({type: SET_TOTAL_USERS_COUNT, data})
export const setFetchingAC = (data) => ({type: TOGGLE_IS_FETCHING, data})


export default usersPageReducer

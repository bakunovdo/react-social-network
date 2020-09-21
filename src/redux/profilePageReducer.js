import {apiProfile} from "../api/api";

const ADD_POST = "profile/ADD_POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"

export const TOGGLE_LOADING = "TOGGLE_LOADING"

let initialState = {
    posts: [
        {
            id: 1,
            message: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, " +
                "and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        },
        {id: 2, message: "Hello everybody!"},
        {id: 3, message: "Сегодня отличный день!"}
    ],
    profile: null,
    status: '',
    isLoading: true
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const lastPost = state.posts[state.posts.length - 1]
            let newPost = {
                id: lastPost.id + 1,
                message: action.text,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case TOGGLE_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

//Actions
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const addPost = (text) => ({type: ADD_POST, text})
export const toggleLoading = (isLoading) => ({type: TOGGLE_LOADING, isLoading})

//Thunks
export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleLoading(true))
        apiProfile.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
            dispatch(toggleLoading(false))
        })
    }
}


export const getStatus = (userId) => {
    return (dispatch) => {
        apiProfile.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        apiProfile.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}


export default profilePageReducer

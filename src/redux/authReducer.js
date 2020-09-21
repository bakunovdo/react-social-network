/** @namespace response.data.resultCode **/

import {apiAuth, apiSecurity} from "../api/api";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA"
const SET_ERRORS_ON_AUTHORIZE = "auth/SET_ERRORS_ON_AUTHORIZE"
const SET_CAPTCHA = "auth/SET_CAPTCHA"

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null,
    errorsMessage: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                errorsMessage: null,
                captcha: null
            }
        }
        case SET_ERRORS_ON_AUTHORIZE: {
            return {
                ...state,
                errorsMessage: [...action.payload]
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.payload
            }
        }
        default:
            return state
    }
}

//Actions
const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, login, email, isAuth}
})

const setErrorsOnAuthorize = (arrErrors) => ({type: SET_ERRORS_ON_AUTHORIZE, payload: arrErrors})

const setCaptcha = (url) => ({type: SET_CAPTCHA, payload: url})


//Thunks
export const getAuthUserData = () => (dispatch) => {
    return apiAuth.me().then(response => {
        if (response.data.resultCode === 0) {
            const {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    })
}

export const login = ({email, password, rememberMe, captcha}) => (dispatch) => {
    apiAuth.login(email, password, rememberMe, captcha).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else if (response.data.resultCode === 10) {
            apiSecurity.captcha().then(responseSec => {
                dispatch(setCaptcha(responseSec.data.url))
            })
        }

        if (response.data.messages) {
            dispatch(setErrorsOnAuthorize(response.data.messages))
        }
    })
}

export const logout = () => (dispatch) => {
    apiAuth.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}


export default authReducer

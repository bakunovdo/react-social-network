import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS"

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

//Actions
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

//Thunks
export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData())
    promise.then( ()=> {
        dispatch(initializedSuccess())
    })
}


export default appReducer

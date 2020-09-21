import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";


let reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage:  usersPageReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store

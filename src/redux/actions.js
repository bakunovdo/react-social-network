import {
  ADD_POST,
  UPDATE_NEW_POST_TEXT
} from "./profilePageReducer";


import {
  CHANGE_TEXT_MESSAGE,
  SEND_MESSAGE
} from "./dialogsPageReducer";

import {
  SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT,
  SET_USERS,
  TOGGLE_FOLLOW, TOGGLE_IS_FETCHING
} from "./usersPageReducer";

export function addPostAC(data) {
  return {
    type: ADD_POST,
    data
  }
}

export function updateNewPostTextAC(data) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    data
  }
}

export function changeTextMessageAC(data) {
  return {
    type: CHANGE_TEXT_MESSAGE,
    data
  }
}

export function sendMessageAC(data) {
  return {
    type: SEND_MESSAGE,
    data
  }
}

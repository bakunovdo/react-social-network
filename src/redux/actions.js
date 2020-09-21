import {SEND_MESSAGE} from "./dialogsPageReducer";

export function sendMessageAC(data) {
  return {
    type: SEND_MESSAGE,
    data
  }
}

import Dialogs from "./Dialogs";
import {changeTextMessageAC, sendMessageAC} from "../../redux/actions";
import {connect} from "react-redux";

let mapState = (state) => {
  return {
    state: state.dialogsPage,
  }
}

let mapDispatch = (dispatch) => {
  return {
    sendMessage: (text) => {
      dispatch(sendMessageAC({
        message: text
      }))
    },
    changeTextMessage: (text) => {
      dispatch(changeTextMessageAC({
        message: text
      }))
    }
  }
}

const DialogsContainer = connect(mapState, mapDispatch)(Dialogs)

export default DialogsContainer

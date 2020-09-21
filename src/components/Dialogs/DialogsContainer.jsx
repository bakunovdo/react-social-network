import Dialogs from "./Dialogs";
import {sendMessageAC} from "../../redux/actions";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageAC({
                message: text
            }))
        }
    }
}

const ComposedComponent = compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)


export default ComposedComponent

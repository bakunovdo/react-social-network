import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/actions";
import {connect} from "react-redux";

const mapState = (state) => {
  return {
    posts: state.profilePage.posts,
    inputPost: state.profilePage.newPostText
  }
}

const mapDispatch = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostAC({message: text}))
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextAC({message: text}))
    }
  }
}

const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts)

export default MyPostsContainer




import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profilePageReducer";

const mapState = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPost(text))
    }
  }
}

const MyPostsContainer = connect(mapState, mapDispatchToProps)(MyPosts)

export default MyPostsContainer




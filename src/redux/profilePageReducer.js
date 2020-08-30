export const ADD_POST = "ADD_POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let initialState = {
  posts: [
    {id: 1, message: "Hey, its Social Network!"},
    {id: 2, message: "Hello everybody!"},
    {id: 3, message: "Сегодня отличный день!"}
  ],
  newPostText: 'Social Network!!'
}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const lastPost = state.posts[state.posts.length-1]
      let newPost = {
        id: lastPost.id + 1,
        message: action.data.message,
        likesCount: 0
      }
      return {...state, posts: [...state.posts, newPost]}
    }
    case UPDATE_NEW_POST_TEXT: {
      return {...state, newPostText: action.data.message}
    }
    default:
      return state
  }
}

export default profilePageReducer

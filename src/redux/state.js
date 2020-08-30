import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hey, its Social Network!"},
        {id: 2, message: "Hello everybody!"},
        {id: 3, message: "Сегодня отличный день!"}
      ],
      newPostText: 'Social Network!!'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Sanya"},
        {id: 2, name: "Mishanya"},
        {id: 3, name: "Valera"}
      ],
      messages: [
        {id: 1, message: "Hello", me: 0},
        {id: 2, message: "Who are you?", me: 1},
        {id: 3, message: "Masterskay IT", me: 0},
        {id: 4, message: "Super socialNetwork!!", me: 0}
      ],
      inputMessage: "hey yo yo"
    }
  },
  _callSubscriber()  {
    console.log('State Changed')
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state)
  }
}


window.store = store
export default store

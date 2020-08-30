export const SEND_MESSAGE = "SEND_MESSAGE"
export const CHANGE_TEXT_MESSAGE = "CHANGE_TEXT_MESSAGE"

let initialState = {
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

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE : {
      const lastMessage = state.messages[state.messages.length-1]
      let newMessage = {
        id: lastMessage.id +1,
        message: action.data.message,
        me: lastMessage.id % 2
      }
      return {...state, messages: [...state.messages, newMessage]}
    }
    case CHANGE_TEXT_MESSAGE: {
      return {...state, inputMessage: action.data.message}
    }
    default: return state
  }
}

export default dialogsPageReducer

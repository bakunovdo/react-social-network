import React from 'react'

import s from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((d, idx) => <DialogItem key={"dialog-" + idx} id={d.id} name={d.name}/>)
  let messagesElements = props.state.messages.map((m, idx) => <Message key={"message-" + idx} id={m.id} message={m.message} me={m.me}/>)

  const textNewMessage = React.createRef()

  const onChangeTextMessage = () => {
    const text = textNewMessage.current.value
    props.changeTextMessage(text)
  }

  const onSendMessage = () => {
    const text = textNewMessage.current.value
    props.sendMessage(text)
    props.changeTextMessage("")
  }

  return (
      <div className={s.pageDialogs}>
        <div className={s.dialogs}>
          {dialogsElements}
        </div>

        <div className={s.chat}>
          <div className={s.messages}>
            {messagesElements}
          </div>
          <div className={s.sendMessage}>
            <textarea className={s.txtarea}
                rows={1}
                placeholder={"Написать сообщение.."}
                value={props.state.inputMessage}
                ref={textNewMessage}

                onChange={onChangeTextMessage}
            />
            <button onClick={onSendMessage}> ></button>
          </div>
        </div>
      </div>
  )
}

export default Dialogs

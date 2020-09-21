import React from 'react'

import s from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import HeaderContainer from "../Header/HeaderContainer";
import profileBackground from "../../assets/images/background-profile.jpg";
import {useFormik} from "formik";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d, idx) => <DialogItem key={"dialog-" + idx} id={d.id}
                                                                          name={d.name}/>)
    let messagesElements = props.state.messages.map((m, idx) => <Message key={"message-" + idx} id={m.id}
                                                                         message={m.message} me={m.me}/>)


    const formik = useFormik({
        initialValues: {
            messageBody: '',
        },
        onSubmit: (values, {setSubmitting}) => {
            setTimeout(() => {
                props.sendMessage(values.messageBody)
                setSubmitting(false)
            }, 500)
        }
    })

    return (
        <div>
            <HeaderContainer/>

            <div className="profile-background">
                <img src={profileBackground} alt=""/>
            </div>

            <div className={s.pageDialogs}>

                <div className={s.dialogs}>
                    {dialogsElements}
                </div>

                <div className={s.chat}>
                    <div className={s.messages}>
                        {messagesElements}
                    </div>

                    <div className={s.sendMessage}>
                        <form onSubmit={formik.handleSubmit}>
                            <textarea
                                className={s.txtarea}
                                rows={1}
                                placeholder={"Написать сообщение.."}

                                onChange={formik.handleChange}
                                value={formik.values.rememberMe}
                                name={"messageBody"}
                            />
                            <button type={"submit"}> ></button>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dialogs

import React from 'react'

import s from "./Message.module.scss"

const Message = (props) => {

    let className = s.message
    if (props.me) { className += ' ' + s.me }
    else className += ' ' + s.notMe

    return (
        <div className={className}>
            {props.message}
        </div>
    )
}

export default Message
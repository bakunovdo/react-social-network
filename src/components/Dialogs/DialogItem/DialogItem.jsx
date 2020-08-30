import React from 'react'

import s from "./DialogItem.module.scss"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id
  return (
      <div className={s.dialog}>
        <div className={s.dialogPhoto}>
          <img src={`https://picsum.photos/64?random=${props.id}`} alt=""/>
        </div>
        <NavLink to={path} className={s.active}>{props.name}</NavLink>
      </div>
  )
}

export default DialogItem
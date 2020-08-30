import React from "react"

import s from "./UserItem.module.scss"
import IconAddUser from "../../../assets/images/addUser";
import IconRemoveUser from "../../../assets/images/removeUser";
import avatarPlaceholder from "../../../assets/images/avatar.png"

const UserItem = (props) => {
  const onToggleFollow = () => {
    props.toggleFollow(props.id)
  }

  return (
      <div className={s.userItem}>
        <div className={s.avatar}>
          {
            // <img src={`https://picsum.photos/96?random=${props.id}`} alt="avatar"/>
            //   <IconUserPlaceholder />
            <img src={props.photoS ? props.photoS : avatarPlaceholder} alt="avatar"/>
          }
        </div>

        <div className={s.header}>
          <div className={s.info}>
            <div className={s.name}>
              {props.fullName}
            </div>
            <div className={s.status}>
              {props.status}
            </div>

            <div className={s.city}>
              {/*{props.location.city + ", " + props.location.country}*/}
            </div>
          </div>

          <div className={s.controls}>
            <div className={s.iconAddUser}>
              {props.followed ? <IconRemoveUser size={24} color="red" /> : <IconAddUser size={24} color={"green"} />}
            </div>
            <button className={props.followed ? s.unfollow : s.follow } onClick={onToggleFollow}>
              {props.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      </div>
  )
}

export default UserItem

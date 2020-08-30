import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
  const defaultText = ""
  
  return (
      <div className={s.post}>
        <img src={`https://picsum.photos/64?random=${props.pic}`} alt="profile_img"/>
        <span>{props.message || defaultText}</span>
      </div>
  )
}

export default Post;

import React from 'react';

import Post from "./Post/Post";
import s from './MyPosts.module.scss';

const MyPosts = (props) => {
  const postsData = props.posts || []
  const postsElements = postsData.map((p) => <Post key={p.id} pic={p.id} message={p.message}/>)

  let newPostMessage = React.createRef()

  const onAddPost = () => {
    const text = newPostMessage.current.value
    props.addPost(text)
    props.updateNewPostText("")
  }

  const onPostChange = () => {
    const text = newPostMessage.current.value
    props.updateNewPostText(text)
  }

  return (
      <div>
        <div className={s.title}>
          My Posts
          <div className={s.new}>
            <textarea
                onChange={onPostChange}
                ref={newPostMessage}
                value={props.inputPost}/>
            <button onClick={onAddPost}>Send</button>
          </div>
        </div>

        <div className="all-posts">
          {postsElements}
        </div>
      </div>
  )
}

export default MyPosts




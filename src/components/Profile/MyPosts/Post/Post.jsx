import React from 'react';
import './Post.scss';

const Post = (props) => {
    const defaultText = ""

    return (
        <div className="post">
            <div className="post-header">
                <div className="profile-thumb">
                    <a href="#home">
                        <img src={`https://picsum.photos/64?random=${props.pic}`} alt="profile_img"/>
                    </a>
                </div>
                <div className="posted-author">
                    <h6 className="author">Full Name</h6>
                    <span className="post-time">10 min ago</span>
                </div>
            </div>

            <div className="post-content">
                <p className="post-content__description">{props.message || defaultText}</p>
            </div>

            <div className="post-footer">
                <div className="likes">
                    20 likes
                </div>
            </div>


        </div>
    )
}

export default Post;

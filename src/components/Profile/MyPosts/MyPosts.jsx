import React from 'react';

import Post from "./Post/Post";
import './MyPosts.scss';
import Avatar from "@material-ui/core/Avatar";
import {useFormik} from "formik";

const MyPosts = (props) => {
    const postsData = props.posts || []
    const postsElements = postsData.map((p) => <Post key={p.id} pic={p.id} message={p.message}/>)

    const formik = useFormik({
        initialValues: {
            postBody: '',
        },
        onSubmit: (values, {setSubmitting}) => {
            if (values.postBody) {
                setTimeout(() => {
                    props.addPost(values.postBody)
                    setSubmitting(false)
                }, 500)
            }
        }
    })


    return (
        <div className="maincontent">
            <div className="sharebox">
                <div className="sharebox-thumb">
                    <Avatar/>
                </div>

                <div className="share-content-box">
                    <form onSubmit={formik.handleSubmit}>
                        <textarea
                            onChange={formik.handleChange}
                            name={"postBody"}
                            value={formik.values.postBody}
                            placeholder="Say something"
                        />
                        <button type={"submit"} disabled={formik.isSubmitting}>Send</button>
                    </form>

                </div>
            </div>

            <div className="all-posts">
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts




import React from "react";

function Post(props) {
    const post = props.post
    const postType = props.postType
    
    const deletePost = (e) => {
        props.handlePost(post._id,"Delete")
        //console.log("post",props)
    }
    console.log(post)
    if (postType == 0) {
        return (
            <div>
                <div>{post.description}</div>
                <div>{post.content.text}</div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div>{post.description}</div>
                <div>{post.content.text}</div>
                <button onClick={deletePost}><div>Delete</div></button>
            </div>
        )
    }
    
}

export default Post
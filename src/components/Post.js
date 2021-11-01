import React from "react";

function Post(props) {
    const post = props.post
    // console.log(post)
    return (
        <div>
            {/* {post.description}
            {post.content} */}
            {post.description}
            {post.content.text}
        </div>
    )
}

export default Post
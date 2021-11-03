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
            <article className="blog-post">
                
                <h2 className="blog-post-title">{post.description}</h2>
                <p className="blog-post-meta">Created at {post.createdAt} by {post.email}</p>
                <p>{post.content.text}</p>
                <hr></hr>
            </article>

            
        )
    }
    else {
        return (
            <article className="blog-post">
                
                <h2 className="blog-post-title">{post.description}</h2>
                <p className="blog-post-meta">Created at {post.createdAt} </p>
                <p>{post.content.text}</p>
                <button onClick={deletePost} className="btn btn-primary"><div>Delete</div></button>
                <hr></hr>
            </article>


        )
    }
    
}

export default Post
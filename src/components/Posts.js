import React, {useState} from "react";
import Post from "./Post";

function Posts(props){

    const view_posts = props.posts
    const postType = props.postType
    // console.log(view_posts)
    console.log(props)
    return (
        <div>
            các loại posts
            {
                view_posts.map( p => 
                     (
                        <Post post = {p} postType = {postType} handlePost = {props.handlePost}></Post>    
                    )
                )
            }
        </div>
    )
}

export default Posts
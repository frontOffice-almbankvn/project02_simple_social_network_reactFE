import React, {useState} from "react";
import Post from "./Post";

function Posts(props){

    const view_posts = props.posts
    // console.log(view_posts)
    return (
        <div>
            các loại posts
            {
                view_posts.map( p => 
                     (
                        <Post post = {p}></Post>    
                    )
                )
            }
        </div>
    )
}

export default Posts
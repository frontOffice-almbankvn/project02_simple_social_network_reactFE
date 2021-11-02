import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Input from './Input'
import Posts from './Posts'
import {Link} from 'react-router-dom'

function WallHome(props) {
    const [state, setState] = useState({
        posts:[]
    })
    
    const config = {
        headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    }

    const p = props

    const addPost = (o) =>{
        console.log(o)
        const data = {
            "description": o.description ,
            "content":{
                "text":o.content
            }
        }

        axios.post("http://localhost:3001/posts",data,config).then(
            response =>{
                setState({
                    posts:[response.data, ...state.posts ]
                })
            }
        )
    }

    const get_my_posts = () => {
        axios.get("http://localhost:3001/posts",config).then(
            response => 
            {
                setState({
                    posts: response.data
                })
            }
        )
    }

    const deletePost = (i) => {
        let m = state.posts.filter( x => x._id !== i)
        setState({
            posts: m
        })
    }

    const handle_post = (id, actionToDo) => {
        console.log(id, actionToDo)

        if (actionToDo === "Delete") {
            axios.delete(`http://localhost:3001/posts/${id}`, config).then( deletePost(id))
        }
    }


    useEffect(()=> {
        get_my_posts()
    },[])

    

    return (
        <div className='tab-content'>
            <div>
                <Link to ="/follows">Search follows</Link>
                <Link to ="/">Back to hall</Link>
            </div>
            <div className='tab-pane fade active show'>
                It is my wall
                {/* Token { sessionStorage.getItem('token')} */}
                <Input addPost= {addPost} />
                <Posts posts = {state.posts} postType = {1} handlePost = {handle_post}/>
            </div>
        </div>
        
    )
}

export default WallHome
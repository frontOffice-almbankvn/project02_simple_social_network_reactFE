import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Input from './Input'
import Posts from './Posts'
import {Link} from 'react-router-dom'

function Wall(props) {
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

    const handle_post = (id, actionToDo) => {
        console.log(id, actionToDo)
    }

    const get_related_post = () => {
        axios.get("http://localhost:3001/relatedposts", config).then(
            response => {
                setState({
                    posts: response.data
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



    useEffect(()=> {
        get_related_post() 
    },[])

    

    return (
        <div className='tab-content'>
            <div>
                <Link to ="/follows">Search follows</Link>
                <Link to ="/home">Home</Link>
            </div>
            <div className='tab-pane fade active show'>
                <Input addPost= {addPost} />
                Public
                {/* Token { sessionStorage.getItem('token')} */}
                <Posts posts = {state.posts} postType = {0} handle_post = {handle_post}/>
            </div>
        </div>
        
    )
}

export default Wall
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

    useEffect(()=> {
        
        axios.get("http://localhost:3001/posts",config).then(
            response => 
            {
                // console.log(response.data)
                setState({
                    posts: response.data
                })
            }
        )
    },[])

    return (
        <div className='tab-content'>
            <div>
                <Link to ="/follows">Search follows</Link>
                </div>
            <div className='tab-pane fade active show'>
                It is my wall
                {/* Token { sessionStorage.getItem('token')} */}
                <Input addPost= {addPost} />
                <Posts posts = {state.posts}/>
            </div>
        </div>
        
    )
}

export default Wall
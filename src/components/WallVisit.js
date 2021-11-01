import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Input from './Input'
import Posts from './Posts'
import {Link, useLocation} from 'react-router-dom'

function WallVisit(props) {
    const [state, setState] = useState({
        posts:[]
    })
    
    const location = useLocation()
    console.log(location.state)

    const config = {
        headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    }

    const p = props

    const addPost = (o) =>{
        console.log(location.state)
        // console.log(o)
        // const data = {
        //     "description": o.description ,
        //     "content":{
        //         "text":o.content
        //     }
        // }

        // axios.post("http://localhost:3001/posts",data,config).then(
        //     response =>{
        //         setState({
        //             posts:[response.data, ...state.posts ]
        //         })
        //     }
        // )
    }

    useEffect(()=> {
        // console.log(location.state)
        // console.log(props.location.state)
        const data ={
            "search_id": location.state
        }
        // console.log(data)
        // console.log(data)
        axios.post("http://localhost:3001/visitposts",data,config).then(
            response => 
            {
                console.log(response.data)
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
                It is following's wall
                {location.visit_id}
                {/* <Input addPost= {addPost} /> */}
                <Posts posts = {state.posts}/>
            </div>
        </div>
        
    )
}

export default WallVisit
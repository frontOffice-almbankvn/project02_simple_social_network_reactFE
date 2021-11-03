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
        <div className='container'>
            <div className='row'>
                <header className='d-flex justify-content-center py-3'>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'><Link to ="/follows" className='nav-link'>Search Follows</Link></li>
                        <li className='nav-item'><Link to ="/home" className='nav-link'>Home</Link></li>
                    </ul>   
                </header>
                
            </div>
            <div className='row g-5'>
                {/* <Input addPost= {addPost} /> */}
                
                {/* Token { sessionStorage.getItem('token')} */}
                <Posts posts = {state.posts} postType = {0} handle_post = {handle_post}/>
                <div class="col-md-4">
                    <div className='position-sticky'>
                        <div className='p-4 mb-3 bg-light rounded'>
                            <h4 class="fst-italic">About</h4>
                            <p className='mb-0'>
                                Project 02: thực hiện bởi Trương Nguyễn Duy Phương - MSSV: 20209040 - Tháng 11 năm 2021
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Wall
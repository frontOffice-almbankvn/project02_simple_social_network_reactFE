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

    // const addPost = (o) =>{
    //     console.log(location.state)
    // }

    useEffect(()=> {
        const data ={
            "search_id": location.state
        }
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
        <div className='container'>
            <div className='row'>
                <header className='d-flex justify-content-center py-3'>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'><Link to="/follows" className='nav-link'>Search Follows</Link></li>
                        <li className='nav-item'><Link to="/" className='nav-link'>Hall</Link></li>
                    </ul>
                </header>
            </div>

            <div className='row g-5'>
                {/* <Input addPost= {addPost} /> */}
                <Posts posts = {state.posts}/>
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

export default WallVisit
import React, { useState } from "react";
import InputSearch from "./InputSearch";
import { Link } from 'react-router-dom'
import Followers from "./Followers";
import axios from "axios";

function FollowView(props) {
    const [state, setState] = useState({
        targets: []
    })

    const config = {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    }

    const searchTargets = (t) => {
        let data = {}
        if (!t) {
            data = { text: "" }
        } else {
            data = { text: t }
        }

        axios.post("http://localhost:3001/follows", data, config).then(
            response => {
                console.log(response.data)
                setState({
                    targets: response.data
                })
            }
        )
    }

    const updateStatus = (i, stt) => {
        let m = state.targets.map(x => {
            const a = Object.assign({}, x)
            if (a._id === i) {
                a.followStatus = stt
            }
            return a
        })
        setState({
            targets: m
        })

    }

    const handleFollow = (i, stt) => {
        // console.log(i, stt)
        if (stt === "Followed") {
            console.log("Unfollowing")
            axios.post("http://localhost:3001/users/unfollow", { followPeople_id: i }, config).then(
                updateStatus(i, "Follow")
            )
        } else {
            console.log("Following")
            axios.post("http://localhost:3001/users/follow", { followPeople_id: i }, config).then(
                updateStatus(i, "Followed")
            )
        }

    }

    return (
        <div className="container">
             
            <div className='row'>
                <header className='d-flex justify-content-center py-3'>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'><Link to ="/home" className='nav-link'>Home</Link></li>
                        <li className='nav-item'><Link to="/" className='nav-link'>Hall</Link></li>
                    </ul>   
                </header>
                
            </div>

            <InputSearch searchTargets={searchTargets}></InputSearch>
            <Followers fls={state.targets} handleFollow={handleFollow}></Followers>
            
        </div>
    )
}

export default FollowView
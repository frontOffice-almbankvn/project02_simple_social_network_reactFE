import React, { useState } from "react";
import {Link} from 'react-router-dom'

function Follower(props){
    const p = props

    const clickFollow = () =>{
        p.handleFollow(p.fl._id, p.fl.followStatus)

    }
    
    return (
        <div>
            <div><Link to=
            {{
                pathname: "/visit",
                state: p.fl._id // your data array of objects
              }}
            >
                {p.fl.email} </Link></div>
            {/* <div>{p.fl.followStatus}</div> */}
            <button onClick={clickFollow}>
                {p.fl.followStatus}</button>
        </div>
        
    )
}

export default Follower
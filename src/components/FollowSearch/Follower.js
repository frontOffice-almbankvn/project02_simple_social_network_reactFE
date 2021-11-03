import React, { useState } from "react";
import {Link} from 'react-router-dom'

function Follower(props){
    const p = props

    const clickFollow = () =>{
        p.handleFollow(p.fl._id, p.fl.followStatus)

    }
    
    return (
        <div className="row mt-3">
            <div className="col-auto"><Link className="nav-link" to=
            {{
                pathname: "/visit",
                state: p.fl._id // your data array of objects
              }}
            >
                {p.fl.email} </Link></div>

            <button onClick={clickFollow} className="col-auto btn btn-primary">
                {p.fl.followStatus}</button>
        </div>
        
    )
}

export default Follower
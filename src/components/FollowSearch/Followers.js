import React from "react";
import Follower from "./Follower";

function Followers(props){
    const p = props
    // console.log(p)
    return(
        <div className="col-md-8">
            
            
            {
                p.fls.map( x => (
                        <Follower fl = {x} handleFollow = {p.handleFollow}></Follower>
                        
                    )
                )
            }
        </div>
    )
}

export default Followers
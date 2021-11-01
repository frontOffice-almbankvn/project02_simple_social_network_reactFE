import React, { useState } from "react";
import './css/Login.css'
import axios from "axios"


function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const addToken = props.addToken

    const submitLogin = (e) => {
        e.preventDefault();
        // console.log(email, password)
        axios.post("http://localhost:3001/users/login",{
            email: email,
            password: password
        }).then((response) => {
            // console.log(response.data.token)
            addToken(response.data.token)
            
        } )
    }
    
    return (
        <div className="login-wrapper">
            <form onSubmit={submitLogin}>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" on onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}


export default Login
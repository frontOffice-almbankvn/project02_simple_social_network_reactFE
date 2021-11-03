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
        axios.post("http://localhost:3001/users/login", {
            email: email,
            password: password
        }).then((response) => {
            // console.log(response.data.token)
            addToken(response.data.token)

        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <form onSubmit={submitLogin}>
                        <div class="form-group">
                            <label>
                                <p>Email</p>
                                <input className="form-control" type="text" onChange={e => setEmail(e.target.value)} />
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                <p>Password</p>
                                <input className="form-control" type="password" on onChange={e => setPassword(e.target.value)} />
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary mt-4">Login</button>

                    </form>
                </div>
            </div>
        </div>
    )
}


export default Login
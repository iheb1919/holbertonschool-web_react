import React from "react";
import './Login.css';

export default function Login() {
    return (
        <React.Fragment>
            <div className="App-body"> 
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email"></input>
                <label htmlFor="password" id="password">Password: </label>
                <input type="password" name="password"></input>
                <button>OK</button>
            </div>
        </React.Fragment>
    );
}
    
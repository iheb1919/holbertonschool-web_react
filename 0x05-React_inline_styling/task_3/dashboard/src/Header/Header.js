import React from 'react';

import logo from '../assets/logo.jpg';


export default function Header(props) {
    return (
        <div className={props.className}>
            <img  src={logo} alt="logo" />
            <h1>School dashboard</h1>
        </div>
    )
}
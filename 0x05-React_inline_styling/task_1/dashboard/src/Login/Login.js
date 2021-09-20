import React from "react";

import { css, StyleSheet } from "aphrodite";
export default function Login() {
    const style = StyleSheet.create({
        App_body:{
            height: '70%',
            padding: '1rem',
            fontSize: '1.2rem',
            fontWeight: '500',
        },
        password:{
            marginLeft: '0px',
        },
        div:{
            '@media(max-width: 600px)':{
            display:'flex',
            flexDirection:'column'}
        },
        lb: {
            border: 'none'
        },
        btn:{
            ":hover":{
                borderColor:'gold ',
                boxShadow:'1px 1px 1px 1px gold'
            }
        }
    })
    return (
        <React.Fragment>
            <div className={css(style.App_body)}> 
                <p>Login to access the full dashboard</p>
                <div className={css(style.div)}>
                    <div className=''>
                        <label  htmlFor="email">Email: </label>
                        <input className={css(style.lb)} type="email" name="email" id="email"></input>
                    </div>
                    <div className=''>
                        <label className={css(style.password)} htmlFor="password" id="password">Password: </label>
                        <input className={css(style.lb)} type="password" name="password"></input>
                    </div>
                </div>
                <button className={css(style.btn)}>OK</button>
            </div>
        </React.Fragment>
    );
}
    
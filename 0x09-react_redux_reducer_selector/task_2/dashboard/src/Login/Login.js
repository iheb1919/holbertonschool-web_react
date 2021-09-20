import React, { Component } from "react";

import { css, StyleSheet } from "aphrodite";
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
 class Login extends Component {
     constructor(props){
         super(props);
         this.state={
            isLoggedIn:false,
            email:null,
            password:null,
            enableSubmit:false
         };
         this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
         this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangePassword = this.handleChangePassword.bind(this);
         this.logIn= props.logIn;
     }
     handleLoginSubmit (e){
        e.preventDefault()
        this.logIn(this.state.email, this.state.password);
        console.log(this.state.isLoggedIn)
     }
     handleChangeEmail(e) {
        this.setState({email: e.target.value})
        if (this.state.email && this.state.password) this.setState({enableSubmit: true})
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value})
        if (this.state.email && this.state.password) this.setState({enableSubmit: true})
    }
    
        
    render()
    {return (
        <React.Fragment>
            <div className={css(style.App_body)}> 
                <p>Login to access the full dashboard</p>
                <div className={css(style.div)}>
                    <form onSubmit={this.handleLoginSubmit}>
                        <div className=''>
                            <label  htmlFor="email">Email: </label>
                            <input className={css(style.lb)} type="email" name="email" id="email" value={this.state.email || ""} onChange={this.handleChangeEmail}></input>
                        </div>
                        <div className=''>
                            <label className={css(style.password)} htmlFor="password" id="password" >Password: </label>
                            <input className={css(style.lb)} type="password" name="password" value={this.state.password || ""} onChange={this.handleChangePassword}></input>
                        </div>
                <input value="ok" type="submit" className={css(style.btn)} disabled={!this.state.enableSubmit} ></input>
                    </form>
                </div>
                
                    
                    
                
            </div>
           
        </React.Fragment>
    );}
}
export default Login
    
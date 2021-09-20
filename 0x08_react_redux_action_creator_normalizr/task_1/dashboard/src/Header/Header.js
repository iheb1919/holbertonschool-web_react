import React, { Component } from 'react';

import logo from '../assets/logo.jpg';
import PropTypes from 'prop-types';
import AppContext from '../App/AppContext';
import { StyleSheet, css } from 'aphrodite';
const styles= StyleSheet.create ({
    header:{
        order:'-1',
        paddingTop:"50px",
        height:'200px',
        ":nth-child(1n) > img":{
          width: "200px",
          height: "200px",
        
          '@media (max-width: 900px)':{
            width: "100px",
            height: "100px",
          }
        },
        ":nth-child(2n)>h1":{
          width:""
        },
        display: "flex",
        alignItems: "center",
        color: "#e0354b",
        fontBize: "1.5rem",
        fontWeight: "bold",
        height: "25%",
        
      }
})

 class Header extends Component {
    constructor(props){
        super(props)
    }
    static contextType = AppContext;
    render()
    {
        const { user, logOut } = this.context;
        return (
        <div className={css(styles.header)}>
            <img  src={logo} alt="logo" />
            <h1>School dashboard</h1>
            {
					user.isLoggedIn &&
					<section id="logoutSection">
						
						<p>Welcome <b>{user.email}</b> <a href="#" onClick={() => logOut()}>(logout)</a></p>
					</section>
				}
        </div>
    )
    }
}
Header.propTypes = {
	user: PropTypes.object,
	logOut: PropTypes.func
};

Header.defaultProps = {
	user: {
		email: '',
		password: '',
		isLoggedIn: false,
	},
	logOut: () => this.logOut(),
};
export default Header
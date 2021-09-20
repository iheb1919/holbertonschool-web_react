import React,{useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';
const style = StyleSheet.create({
  footer: {
    ":nth-child(1n) > p":{
      margin: "0",
    },
    paddigTop:'10px',
    height: "5%",
    borderTop: "3px solid #e0354b",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'column',
    fontSize: "1.2rem",
    fontWeight: "500"
    
  },
  contact:{
    ':hover':{
      color:'red'
    }
  }
})
export default function Footer(props) {
  const {user} = useContext(AppContext);
  return (
    
        
          <div className={css(style.footer)}>
              <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
              {
              user.isLoggedIn &&
              <a className={css(style.contact)} href="#">Contact us</a>
              }
          </div>
       
  );
}


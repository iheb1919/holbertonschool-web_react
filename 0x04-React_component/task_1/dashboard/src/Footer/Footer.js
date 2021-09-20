import {getFullYear, getFooterCopy} from '../utils/utils.js'
import React from 'react';
import './Footer.css';
function Footer() {
  return (
      
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    
  );
}


export default Footer;

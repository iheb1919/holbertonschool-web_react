import logo from '../assets/holberton.jpg';
import React from 'react';
import './Header.css';

function Header() {
  return (
      <header className="App-header">
      <img className="imgholb" src={logo} alt="holberton"/>
      <h1>School dashboard</h1>
      </header>
    
  );
}
export default Header;

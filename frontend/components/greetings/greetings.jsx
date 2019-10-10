import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="navBar">
      <button className="nav-button"> Become a Host </button>
      <button className="nav-button"> Help </button>
      <button id="open-button" className="nav-button">
        <Link to="/signup">Sign up</Link>
        </button>
      <button id="open-button" className="nav-button">
        <Link to="/login">Log In</Link>
        </button>
    </nav>
  );
  const personalGreeting = () => (
  
    <nav className="navBar">
      <button className="nav-button"> Become a Host </button>
      <button className="nav-button"> Saved </button>
      <button className="nav-button"> Trips </button>
      <button className="nav-button"> Messages </button>
      <button className="nav-button"> Help </button>
      <button className="nav-button" onClick={logout}>Log Out</button>
    </nav>
   
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

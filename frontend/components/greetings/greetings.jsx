import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
    <nav className="navBar">
      <button> Become a Host </button>
      <button> Help </button>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up!</Link>
    </nav>
    <hgroup className="header">
      <h2 className="header">Explore LiftsInNOut</h2>
    </hgroup>
    </div>
  );
  const personalGreeting = () => (
    <div>
    <nav className="navBar">
      <button> Become a Host </button>
      <button> Saved </button>
      <button> Trips </button>
      <button> Messages </button>
      <button> Help </button>
      <button className="header button" onClick={logout}>Log Out</button>
    </nav>
    <hgroup className="header">
      <h2 className="header name">What can we help you find, {currentUser.fname}!</h2>
    </hgroup>
    </div >
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

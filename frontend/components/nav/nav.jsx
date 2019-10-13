import React from 'react';

const Nav = ({ currentUser, logout, login, signup}) => {
  const sessionLinks = () => (
  <nav className="navBar">
    <button className="nav-button"> Become a Host </button>
    <button className="nav-button"> Help </button>
    <button className='session-button' onClick={signup}>
      Sign up
    </button>
    <button className='session-button' onClick={login}>
      Log In
    </button>
  </nav>);
  const personalNav = () => (
    <nav className="navBar">
      <button className="nav-button"> Become a Host </button>
      <button className="nav-button"> Saved </button>
      <button className="nav-button"> Trips </button>
      <button className="nav-button"> Messages </button>
      <button className="nav-button"> Help </button>
      <button className="nav-button" onClick={logout}>Log Out</button>
    </nav>
   
  );

  return currentUser ? personalNav(currentUser, logout) : sessionLinks();
};


export default Nav;

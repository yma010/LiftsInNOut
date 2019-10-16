import React from 'react';


const NavSplash = ({ currentUser, logout, login, signup }) => {
  const sessionLinks = () => (
    <nav className="navBar-splash">
      {/* <button className="nav-button"> Become a Host </button>
    <button className="nav-button"> Help </button> */}
      <button className='session-button-splash' onClick={signup}>
        Sign up
    </button>
      <button className='session-button-splash' onClick={login}>
        Log In
    </button>
    </nav>);
  const personalNav = () => (
    <nav className="navBar-splash">
      {/* <button className="nav-button"> Become a Host </button>
      <button className="nav-button"> Saved </button> 
      <button className="nav-button"> Trips </button>
      <button className="nav-button"> Messages </button>
      <button className="nav-button"> Help </button> */}
      <button className="session-button-splash" onClick={logout}>Log Out</button>
    </nav>

  );

  return currentUser ? personalNav(currentUser, logout) : sessionLinks();
};


export default NavSplash;

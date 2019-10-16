import React from 'react';
import NavSplashContainer from "./nav_splash_container";
import { withRouter } from 'react-router-dom'
import Modal from "../modals/modal";

const NavBarSplash = () => {
  return (
    <header>
      <Modal />
      <div className="navbar-splash">
        <NavSplashContainer />
      </div>
    </header >
  )
}

export default withRouter(NavBarSplash);
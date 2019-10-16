import React from 'react';
import NavContainer from "./nav_container";
import SearchBar from "../search/search_bar";
import { withRouter } from 'react-router-dom'
import Modal from "../modals/modal";

const NavBar = (props) => {
  return(
  <header>
   <Modal />
    <div className="navbar">
      <div className="nav-logo" onClick={()=> props.history.push('/')}></div>
      <SearchBar />
      <NavContainer />
    </div>
  </header >
    )
}

export default withRouter(NavBar);
import React from 'react';
import GreetingContainer from './greetings/greetings_container'
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
  <div>
  <header className="navbar">
    <div className="nav-logo"></div>
    {/* PLACE HOLDER FOR SEARCH BAR */}
    <GreetingContainer />
  </header>
  <div className="modal">
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute  exact path="/signup" component={SignupFormContainer} />
  </div>
  </div>
);

export default App;
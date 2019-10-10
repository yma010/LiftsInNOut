import React from 'react';
import { Provider } from 'react-redux';
import { 
  Route,
  Switch
} from 'react-router-dom';

import Modal from './modals/modal'
import GreetingContainer from './greetings/greetings_container'
// import LoginFormContainer from './session_forms/login_form_container';
// import SignupFormContainer from './session_forms/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
  <div>
    <Modal/>
    <header className="navbar">
      <div className="nav-logo"></div>
      {/* PLACE HOLDER FOR SEARCH BAR */}
      <GreetingContainer />
    </header>
    <Switch>
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute  exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
  </div>
);

export default App;
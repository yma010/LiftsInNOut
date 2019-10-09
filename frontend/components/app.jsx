import React from 'react';
import GreetingContainer from './greetings/greetings_container'
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
  <div>
  <header>
    <h1>Lifting In n Out</h1>
    <GreetingContainer />
  </header>
  <AuthRoute exact path="/login" component={LoginFormContainer} />
  <AuthRoute  exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
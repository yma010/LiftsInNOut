import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingsContainer from "./greetings/greetings_container";
import login_form_container from "./session_forms/login_form_container";
import signup_form_container from "./session_forms/signup_form_container";

const App = () => (
  <div>
  <header>
    <h1>Lifting In n Out</h1>
    <GreetingsContainer />
  </header>

  <Route path="/login" component={login_form_container} />
  <Route path="/signup" component={signup_form_container} />
  </div>
);

export default App;
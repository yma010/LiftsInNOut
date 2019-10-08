import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store"
import * as SessionsApi from './util/session_api_util';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById("root");
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  
  //ajax tests
  window.login = SessionsApi.login;
  window.signup = SessionsApi.signup;
  window.logout = SessionsApi.logout;
  //
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});

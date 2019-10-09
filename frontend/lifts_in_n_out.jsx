import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store"
import Root from './components/root';

// import * as SessionsApi from './util/session_api_util';
// import * as SessionActions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () =>{
  let store;
  if (window.currentUser) { //Bootstrapping the User to persist login
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, root);
  
  //ajax tests
  // window.login = SessionActions.login;
  // window.signup = SessionsApi.signup;
  // window.logout = SessionsApi.logout;
  //
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});

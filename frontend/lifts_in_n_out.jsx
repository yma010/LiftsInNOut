import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store"
import Root from './components/root';

// import * as SessionsApi from './util/session_api_util';
import * as SessionActions from './actions/session_actions';
import * as ListingsAPI from './util/listings_api_util';
import * as ListingActions from './actions/listings_action';

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
  
  //TODO TESTS ONLY
  const testUser = {fname: "Hunter", lname: "Hunt", email: "hunter2@gmail.com", password: "hunter2"};
  window.testUer = testUser;
  // window.login = SessionApi.login;
  // window.signup = SessionsApi.signup;
  // window.logout = SessionsApi.logout;
  window.login = SessionActions.login;
  window.signup = SessionActions.signup;
  window.logout = SessionActions.logout;
  // window.fetchListingAJX = ListingsAPI.fetchListing;
  // window.fetchListingsAJX = ListingsAPI.fetchListings;
  // window.createListing = ListingsAPI.createListing;
  window.updateListing = ListingsAPI.updateListing;
  // window.deleteListing = ListingsAPI.deleteListing;

  window.fetchListings = ListingActions.fetchListings
  window.fetchListing = ListingActions.fetchListing
  window.updateListing = ListingActions.updateListing
  window.createListing = ListingActions.createListing
  window.deleteListing = ListingActions.deleteListing

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

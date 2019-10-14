import React from 'react';
import { Provider } from 'react-redux';
import { 
  Route,
  Switch
} from 'react-router-dom';

import Modal from './modals/modal';
import NavContainer from './nav/nav_container';
import ListingsIndexContainer from './listings/listings_index_container'; //where that container @ tho??
import ListingShowContainer from './listings/listings_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
  <div>
    <Modal/>
    <header className="navbar">
      <div className="nav-logo"></div>
      {/* PLACE HOLDER FOR SEARCH BAR */}
      <NavContainer />
    </header>
    <main>
    <Switch>
      <Route exact path="/listings" component={ListingsIndexContainer} />
      <Route path="/listings/:listingId" component={ListingShowContainer} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute  exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
    </main>
  </div>
);

export default App;
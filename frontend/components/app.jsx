import React from 'react';
import { Provider } from 'react-redux';
import { 
  Route,
  Switch
} from 'react-router-dom';
import ListingShowContainer from './listings/listings_show_container';
import SearchContainer from './search/search_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Splash from './splash/splash';
import bookings_index_container from './bookings/bookings_index_container';
const App = () => (
    <main>
      <Route exact path ="/" component={Splash}/>
      <Route exact path="/listings" component={SearchContainer} />
      <Route path="/listings/:listingId" component={ListingShowContainer} />
      <Route path="/bookings" component={bookings_index_container} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute  exact path="/signup" component={SignupFormContainer} /> */}
    </main>
);

export default App;
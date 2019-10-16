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
const App = () => (
    <main>
      <Route exact path ="/" component={Splash}/>
      <Route exact path="/listings" component={SearchContainer} />
      <Route path="/listings/:listingId" component={ListingShowContainer} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute  exact path="/signup" component={SignupFormContainer} /> */}
    </main>
);

export default App;
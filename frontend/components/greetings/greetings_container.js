import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greetings from './greetings';

const msp = state => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
}

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  msp,
  mdp
)(Greetings);

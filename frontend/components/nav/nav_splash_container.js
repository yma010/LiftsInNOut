import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavSplash from './nav_buttons_splash';
import { openModal } from '../../actions/modal_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  login: () => dispatch(openModal("login")),
  signup:() => dispatch(openModal("signup"))
});

export default connect(
  msp,
  mdp
)(NavSplash);

import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'login'
})


const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: <button className='session-button' onClick={() => dispatch(openModal('signup'))}>
    Sign Up
  </button>,
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupAction } from '../../modules/actions.js';
import SignupCard from './SignupCard/SignupCard.js';

const Signup = (props) => {
  const handleSubmit = (email, password, name, surname) => {
    props.signup({
      email,
      password,
      name,
      surname,
    });
  };


  return (
    <>
      {props.authed ? (
        <Redirect to="/map" />
      ) : (
        <SignupCard handleSubmit={handleSubmit} />
      )}
    </>
  );
};

Signup.propTypes = {
  authed: PropTypes.bool,
  signup: PropTypes.func,
};

Signup.defaultProps = {
  authed: false,
  signup: () => {},
};

const mapStateToProps = (state) => ({
  authed: state.authed,
});

const mapDispathToProps = (dispatch) => ({
  signup: (user) => dispatch(signupAction(user)),
});

export default connect(mapStateToProps, mapDispathToProps)(Signup);

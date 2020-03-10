import React  from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../../modules/actions.js';
import LoginCard from './LoginCard/LoginCard.js';

const Login = (props) => {
    const handleSubmit = (email, password) => {
      props.login({
        email: email,
        password: password,
      });
    }

    return (
        <>
          {props.authed ? (
            <Redirect to="/map" />
          ) : (
            <LoginCard handleSubmit={handleSubmit} />
          )}
        </>
    );
}

Login.propTypes = {
  authed: PropTypes.bool,
  login: PropTypes.func,
}

Login.defaultProps = {
  authed: false,
  login: () => {},
};

const mapStateToProps = state => ({
  authed: state.authed,
});

const mapDispathToProps = dispatch => ({
  login: (user) => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispathToProps)(Login);

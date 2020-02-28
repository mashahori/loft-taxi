import React  from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../../modules/actions.js';
import LoginCard from './LoginCard.js';

const Login = (props) => {
    const handleSubmit = (email, password) => {
      props.login({
        email: email,
        password: password,
      });
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('authed', true);
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

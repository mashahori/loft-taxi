import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import { loginAction } from '../../modules/actions';
import Card from '../Card/Card';

import style from './Login.module.css';

const useStyles = makeStyles({
  container: {
    paddingTop: '10vh',
    maxWidth: '1000px',
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    fontSize: '36px',
    marginBottom: '30px',
  },
  subtitle: {
    marginBottom: '30px',
    display: 'flex',
  },
});

const Login = (props) => {
  const classes = useStyles();

  const handleSubmit = (email, password) => {
    props.login({
      email,
      password,
    });
  };

  return (
    <>
      {props.authed ? (
        <Redirect to="/map" />
      ) : (
        <div className={style.login}>
          <Container className={classes.container}>
            <Logo white />
            <div className={style.card}>
              <Typography variant="h2" className={classes.title}>Войти</Typography>
              <Typography variant="subtitle2" className={classes.subtitle}>
                Новый пользователь?
                <Link className={style.link} to="/signup">Зарегестрируйтесь</Link>
              </Typography>
              <Card handleSubmit={handleSubmit} />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

Login.propTypes = {
  authed: PropTypes.bool,
  login: PropTypes.func,
};

Login.defaultProps = {
  authed: false,
  login: () => {},
};

const mapStateToProps = (state) => ({
  authed: state.authed,
});

const mapDispathToProps = (dispatch) => ({
  login: (user) => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispathToProps)(Login);

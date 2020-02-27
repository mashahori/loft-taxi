import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupAction } from '../../modules/actions.js';

import style from './signup.module.css'

const useStyles = makeStyles({
    container: {
        paddingTop: "20vh",
        maxWidth: "1200px",
    },
    textField: {
        marginBottom: "30px",
    },
    title: {
        fontSize: "36px",
        marginBottom: "30px",
    },
    subtitle: {
        marginBottom: "30px",
        display: "flex",
    }
});

const Signup = (props) => {
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signup({
            email: e.target.email.value,
            password: e.target.password.value,
            name: e.target.name.value,
            surname: e.target.surname.value,
          });
        localStorage.setItem('email', e.target.email.value);
        localStorage.setItem('password', e.target.password.value);
        localStorage.setItem('name', e.target.email.name);
        localStorage.setItem('surname', e.target.password.surname);
        localStorage.setItem('authed', true);
    }


    return (
        <>
            {props.authed ? (
            <Redirect to="/map" />
            ) : (
        <div className={style.signup}>
            <Container className={classes.container} maxWidth="md">
                <div className={style.card}>
                    <Typography variant="h2" className={classes.title}>Регистрация</Typography>
                    <Typography variant="subtitle2" className={classes.subtitle}>
                        Уже зарегестрированы?
                        <Link to="/login">Войти</Link>
                    </Typography>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <TextField className={classes.textField} type="email" name="email" required label={<span>Адрес электронной почты</span>} />
                        <TextField className={classes.textField} type="text" name="name" required label={<span>Имя</span>} />
                        <TextField className={classes.textField} type="text" name="surname" required label={<span>Фамилия</span>} />
                        <TextField className={classes.textField} type="password" name="password" required label={<span>Пароль</span>}  />
                        <Button variant="contained" color="primary" type="submit">
                            Sign up
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
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
    signup: () => {}
};

const mapStateToProps = state => ({
    authed: state.authed
});

const mapDispathToProps = dispatch => ({
  signup: (user) => dispatch(signupAction(user))
});

export default connect(mapStateToProps, mapDispathToProps)(Signup);

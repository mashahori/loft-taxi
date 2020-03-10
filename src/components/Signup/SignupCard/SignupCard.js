import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Logo } from 'loft-taxi-mui-theme';

import style from '../signup.module.css'

const useStyles = makeStyles({
    container: {
        paddingTop: '10vh',
        maxWidth: '1000px',
        alignItems: 'center',
        display: "flex",
    },
    textField: {
        marginBottom: "30px",
        width: '100%',
    },
    textFieldGroup: {
        width: '182px',
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

const SignupCard = (props) => {
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(
            e.target.email.value,
            e.target.password.value,
            e.target.name.value,
            e.target.surname.value,
        );
    }

    return (
        <div className={style.signup}>
            <Container className={classes.container} maxWidth="md">
                <Logo white />
                <div className={style.card}>
                    <Typography variant="h2" className={classes.title}>Регистрация</Typography>
                    <Typography variant="subtitle2" className={classes.subtitle}>
                        Уже зарегестрированы?
                        <Link className={style.link} to="/login">Войти</Link>
                    </Typography>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <TextField className={classes.textField} type="email" name="email" required label={<span>Адрес электронной почты</span>} />
                        <div className={style.group}>
                          <TextField className={classes.textFieldGroup} type="text" name="name" required label={<span>Имя</span>} />
                          <TextField className={classes.textFieldGroup} type="text" name="surname" required label={<span>Фамилия</span>} />
                        </div>
                        <TextField className={classes.textField} type="password" name="password" required label={<span>Пароль</span>}  />
                        <Button variant="contained" color="primary" type="submit">
                           Войти
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );

};

SignupCard.propTypes = {
  handleSubmit: PropTypes.func,
};

SignupCard.defaultProps = {
  handleSubmit: () => {}
};

export default SignupCard;

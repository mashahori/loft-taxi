import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Container, Typography, Link } from '@material-ui/core';
import { Context } from '../../App';

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
    const context = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const surname = e.target.surname.value;
        console.log(password, name, email, surname );
        context.login(email, password);
    }


    return (
        <div className={style.signup}>
            <Container className={classes.container} maxWidth="md">
                <div className={style.card}>
                    <Typography variant="h2" className={classes.title}>Регистрация</Typography>
                    <Typography variant="subtitle2" className={classes.subtitle}>
                        Уже зарегестрированы?
                        <Link onClick={() => props.setPage('login')}>Войти</Link>
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
    );

};

Signup.propTypes = {
  setPage: PropTypes.func,
};

Signup.defaultProps = {
  setPage: () => {},
};
    
  

export default Signup;

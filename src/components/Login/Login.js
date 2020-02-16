import React, { useContext }  from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import { Context } from '../../App';
import { Link, Redirect } from 'react-router-dom';
import withAuth from '../../hocs/withAuth.js';

import style from './Login.module.css'

const useStyles = makeStyles({
    container: {
        paddingTop: '20vh',
        maxWidth: '1200px'
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

const Login = (props) => {
    const classes = useStyles();
    const context = useContext(Context);

    const handleSubmit = (e) => {
      e.preventDefault();
      context.login(e.target.email.value, e.target.password.value);
    }
    
    return (
        <>
            {context.isLoggedIn ? (
            <Redirect to="/map" />
            ) : (
            <div className={style.login}>
                <Container className={classes.container}>
                    <div className={style.card}>
                        <Typography variant="h2" className={classes.title}>Войти</Typography>
                        <Typography variant="subtitle2" className={classes.subtitle}>
                            Новый пользователь?
                            <Link to="/signup">Зарегестрируйтесь</Link>
                        </Typography>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <TextField className={classes.textField} type="email" name="email" required label={<span>Имя пользователя</span>} />
                        <TextField className={classes.textField} type="password" name="password" required label={<span>Пароль</span>}  />
                        <Button className={style.login__submit} variant="contained" color="primary" type="submit">
                            Log in
                        </Button>
                    </form>
                    </div>
                </Container>
            </div>
            )}
        </>
    );
}

Login.propTypes = {
    setPage: PropTypes.func,
}

Login.defaultProps = {
    setPage: () => {},
  };

export default Login;

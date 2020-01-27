import React, { useContext }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Container, Typography, Link } from '@material-ui/core';
import { Context } from '../../App';

import style from './Login.module.css'

const useStyles = makeStyles({
    textField: {
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
    
    return (
        <div className={style.login}>
            <Container maxWidth="md" style={{ paddingTop: "285px", paddingLeft: "585px"}}>
                <form className={style.login__form} onSubmit={(e) => context.login(e.target.email.value, e.target.password.value)}>
                    <Typography variant="h2" style={{ fontSize: "36px", marginBottom: "30px"}}>Войти</Typography>
                    <Typography variant="subtitle2" className={classes.subtitle}>
                        Новый пользователь?
                        <Link>Зарегестрируйтесь</Link>
                    </Typography>
                    <TextField className={classes.textField} type="email" name="email" required label={<span>Имя пользователя</span>} />
                    <TextField className={classes.textField} type="password" name="password" required label={<span>Пароль</span>}  />
                    <Button className={style.login__submit} variant="contained" color="primary" type="submit">
                        Log in
                    </Button>
                </form>
            </Container>
        </div>
    );

}

export default Login;

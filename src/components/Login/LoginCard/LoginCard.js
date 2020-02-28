import React  from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Logo } from 'loft-taxi-mui-theme';

import style from '../Login.module.css'

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
    title: {
        fontSize: "36px",
        marginBottom: "30px",
    },
    subtitle: {
        marginBottom: "30px",
        display: "flex",
    }
  });

const LoginCard = (props) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(e.target.email.value, e.target.password.value);
  };

  return (
    <div className={style.login}>
      <Container className={classes.container}>
        <Logo white />
        <div className={style.card}>
          <Typography variant="h2" className={classes.title}>Войти</Typography>
          <Typography variant="subtitle2" className={classes.subtitle}>
              Новый пользователь?
              <Link className={style.link} to="/signup">Зарегестрируйтесь</Link>
          </Typography>
          <form className={style.form} onSubmit={handleSubmit}>
            <TextField className={classes.textField} type="email" name="email" required label={<span>Имя пользователя</span>} />
            <TextField className={classes.textField} type="password" name="password" required label={<span>Пароль</span>}  />
            <Button className={style.login__submit} variant="contained" color="primary" type="submit">
              Войти
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

LoginCard.propTypes = {
  handleSubmit: PropTypes.func,
}

LoginCard.defaultProps = {
  handleSubmit: () => {},
};

export default LoginCard;

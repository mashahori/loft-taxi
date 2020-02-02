import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Paper, Typography, Card } from '@material-ui/core';
import style from './Profile.module.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
      maxWidth: '630px',
      margin: '0 auto',
      padding: '44px 60px'
  },
  textField: {
      marginBottom: '30px',
      width: '100%'
  },
  title: { 
      fontSize: "36px",
      marginBottom: "30px",
  },
  subtitle: {
      marginBottom: "30px",
      display: "flex",
  },
  card: {
    maxWidth: '260px',
    padding: '16px 32px'
  }
});

const Profile = (props) => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setPage('map');
  }
  return (
    <div className={style.profile}>
      <Paper className={classes.wrapper}>
        <Typography variant="h2" className={classes.title}>Профиль</Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          Способ оплаты
        </Typography>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.group}>
            <Card className={classes.card}>
              <TextField className={classes.textField} type="number" name="card" required label={<span>Номер карты</span>} />
              <TextField className={classes.textField} type="number" name="date" required label={<span>Срок действия</span>} />
            </Card>
            <Card className={classes.card}>
              <TextField className={classes.textField} type="text" name="card-name" required label={<span>Имя владельца</span>} />
              <TextField className={classes.textField} type="number" name="cvc" required label={<span>CVC</span>} />
            </Card>
          </div>
          <Button type="submit" variant="contained" color="primary" >Сохранить</Button>
        </form>
      </Paper>
    </div>
  );

};

Profile.propTypes = {
  setPage: PropTypes.func,
}

Profile.defaultProps = {
  setPage: () => {},
};


export default Profile;

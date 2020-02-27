import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Paper, Typography, Card } from '@material-ui/core';
import style from './Profile.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCardAction } from '../../modules/actions.js';

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
    props.addCard({
      number: e.target.card.value,
      name: e.target.surname.value,
      date: e.target.date.value,
      cvc: e.target.cvc.value,
    });

  }
  return (
      <div className={style.profile}>
      <Paper className={classes.wrapper}>
        <Typography variant="h2" className={classes.title}>Профиль</Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          Способ оплаты
        </Typography>
        {props.cardIsExist ? (
          <>
            <p>Платежные данные обновлены. Теперь вы можете заказывать такси.</p>
            <Button to='map' component={Link} variant="contained" color="primary">
              Перейти на карту
            </Button>
          </>
        ) : (
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.group}>
              <Card className={classes.card}>
                <TextField className={classes.textField} type="number" name="card" placeholder="0000000000000000" required label={<span>Номер карты</span>} />
                <TextField className={classes.textField} type="text" name="date" placeholder="mm/yy" required label={<span>Срок действия</span>} />
              </Card>
              <Card className={classes.card}>
                <TextField className={classes.textField} type="text" name="surname" placeholder="name surname" required label={<span>Имя владельца</span>} />
                <TextField className={classes.textField} type="number" name="cvc" placeholder="cvc" required label={<span>CVC</span>} />
              </Card>
            </div>
            <Button type="submit" variant="contained" color="primary" >Сохранить</Button>
          </form>
        )
      }
      </Paper>
    </div>
  );

};

Profile.propTypes = {
  addCard: PropTypes.func,
  cardIsExist: PropTypes.bool,
}

Profile.defaultProps = {
  addCard: () => {},
  cardIsExist: false,
};

const mapStateToProps = state => ({
    cardIsExist: state.cardIsExist
});

const mapDispathToProps = dispatch => ({
  addCard: (card) => dispatch(addCardAction(card))
});


export default connect(mapStateToProps, mapDispathToProps)(Profile);

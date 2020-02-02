import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation.js';
import AppBar from '@material-ui/core/AppBar';
import { Logo } from 'loft-taxi-mui-theme';
import { makeStyles } from '@material-ui/core/styles';
import style from './Header.module.css'

const useStyles = makeStyles({
  bar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0 24px',
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
  <AppBar className={classes.bar} color="default" position="static">
    <Logo />
    <ul className={style.menu}>
      {props.routes.map((item) => <Navigation key={item} setPage={props.setPage} text={item} />)}
    </ul>
  </AppBar>
  )};

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Header;

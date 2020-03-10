import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation.js';
import AppBar from '@material-ui/core/AppBar';
import { Logo } from 'loft-taxi-mui-theme';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import style from './Header.module.css'

const useStyles = makeStyles({
  bar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0 24px',
      zIndex: 10,
      backgroundColor: '#ffffff',
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
  <AppBar className={classes.bar} position="fixed">
    <Link to="/map">
      <Logo />
    </Link>
    {props.routes.length && (
      <ul className={style.menu}>
        {props.routes.map((item) => <li key={item}><Navigation text={item} /></li>)}
      </ul>
    )}
  </AppBar>
)};

Header.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
  routes: [],
};

export default Header;

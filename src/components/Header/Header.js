import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation.js';

const Header = (props) => (
    <ul style={{ display: "flex", listStyle: "none" }}>
      {props.routes.map((item) => <Navigation key={item} setPage={props.setPage} text={item} />)}
    </ul>
);

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Header;

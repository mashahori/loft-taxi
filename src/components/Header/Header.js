import React from 'react';
import Navigation from '../Navigation/Navigation.js';

const PAGES = [ 'map', 'profile', 'logout' ];

const Header = (props) => (
    <ul style={{ display: "flex", listStyle: "none" }}>
      {PAGES.map((item) => <Navigation key={item} setPage={props.setPage} text={item} />)}
    </ul>
);

export default Header;

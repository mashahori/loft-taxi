import React from 'react';

const PAGES = [ 'profile', 'map', 'signup', 'login' ];

const Header = (props) => (
    <ul style={{ display: "flex", listStyle: "none" }}>
      {PAGES.map((item) => <li key={item}>
        <button onClick={() => props.setPage(item)}>{item}</button>
      </li>)}
    </ul>
);

export default Header;

import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './Login.js';
import { LoginCard } from './LoginCard.js';
import { Map } from '../Map/Map.js';
import '@testing-library/jest-dom/extend-expect'

describe('render a map', () => {
  test('render without crashing', () => {
    render(() => <Login />);
    expect(<LoginCard />).toBeTruthy();
  });

  test('render without crashing', () => {
    const props = {
      authed: true,
    }
    render(() => <Login {...props}/>);
    expect(<Map />).toBeTruthy();
  });
});
import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { App } from './App.js';
import { Map } from './components/Map/Map.js';
import { Profile } from './components/Profile/Profile.js';
import { Header } from './components/Header/Header.js';
import { Login } from './components/Profile/Profile.js';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';

describe('render routes', () => {
  test('render Header', () => {
    const history = createMemoryHistory();
    const authed = true;
    render(() =>
      (<Router history={history}>
        <App authed={authed} />
      </Router>
    ));
    expect(<Header />).toBeTruthy();
  });

  test('render Map by path', () => {
    const history = createMemoryHistory();
    history.push('/map');
    const authed = true;
    render(() => (
      <Router history={history}>
        <App authed={authed} />
      </Router>
    ));
    expect(<Map />).toBeTruthy();
  })

  test('render Profile by path', () => {
    const history = createMemoryHistory();
    history.push('/profile');
    const authed = true;
    render(() => (
      <Router history={history}>
        <App authed={authed} />
      </Router>
    ));
    expect(<Profile />).toBeTruthy();
  })

  test('redirect from Map to Login if not authed', () => {
    const history = createMemoryHistory();
    history.push('/map');
    const authed = false;
    render(() => (
      <Router history={history}>
        <App authed={authed} />
      </Router>
    ));
    expect(<Login />).toBeTruthy();
  });

  test('redirect from Profile to Login if not authed', () => {
    const history = createMemoryHistory();
    history.push('/profile');
    const authed = false;
    render(() => (
      <Router history={history}>
        <App authed={authed} />
      </Router>
    ));
    expect(<Login />).toBeTruthy();
  });

  test('redirect to Login if no matches', () => {
    const history = createMemoryHistory();
    history.push('/some/bad/route');
    render(() => (
      <Router history={history}>
        <App />
      </Router>
    ));
    expect(<Login />).toBeTruthy();
  });
});

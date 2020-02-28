import React from 'react';
import { render } from '@testing-library/react';
import { PrivateRoute } from './PrivateRoute.js';
import { Login } from '../components/Login/LOgin.js';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'

const App = (props) => (
    <BrowserRouter>
      <PrivateRoute component={props.component} authed={props.authed}/>
    </BrowserRouter>
);

describe('render a map', () => {
  test('authed', () => {
    const props = {
      authed: true,
      component: () => (<h1>Authed</h1>)
    };
    const { getByText } = render(<App {...props} />);
    expect(getByText('Authed')).toBeInTheDocument();
  });

  test('not authed', () => {
    const props = {
      authed: false,
      component: () => (<h1>Authed</h1>)
    };
    render(() => <App {...props} />);
    expect(<Login />).toBeTruthy();
  });
});

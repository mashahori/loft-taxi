import React from 'react';
import { PrivateRoute } from './PrivateRoute.js';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

const App = () => (
    <BrowserRouter>
      <PrivateRoute />
    </BrowserRouter>
);

describe('render PrivateRoute', () => {
  test('render PrivateRout', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PrivateRoute)).toHaveLength(1);
  });

  test('have Child property', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(PrivateRoute)).toHaveProperty('children');
  });
});

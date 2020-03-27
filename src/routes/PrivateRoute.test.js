import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { PrivateRoute } from './PrivateRoute';

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

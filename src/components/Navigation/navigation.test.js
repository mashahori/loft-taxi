import React from 'react';
import { Router } from 'react-router-dom';
import Navigation from './Navigation.js';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from '../../store';
import { createMemoryHistory } from 'history';

const store = createStore();
const history = createMemoryHistory();

describe('render Navigation', () => {
  test('render Navigation', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router history={history}>
          <Navigation />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Navigation)).toHaveLength(1);;
  });
});
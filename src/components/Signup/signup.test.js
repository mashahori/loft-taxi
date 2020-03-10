import React from 'react';
import { Router } from 'react-router-dom';
import Signup from './Signup.js';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from '../../store';
import { createMemoryHistory } from 'history';

const store = createStore();
const history = createMemoryHistory();

describe('render Signup', () => {
  test('render Signup', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router history={history}>
          <Signup authed={false} />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Signup)).toHaveLength(1);;
  });
});
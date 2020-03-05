import React from 'react';
import { Router } from 'react-router-dom';
import Map from './Map.js';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from '../../store';
import { createMemoryHistory } from 'history';

const store = createStore();
const history = createMemoryHistory();

describe('render Map', () => {
  test('render Map', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router history={history}>
          <Map />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Map)).toHaveLength(1);;
  });
});
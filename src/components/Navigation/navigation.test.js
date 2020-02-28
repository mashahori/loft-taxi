import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect'
import Navigation from './Navigation.js'
import { shallow } from 'enzyme'


describe('render a navigation', () => {
  const props = {
    text: 'a',
  }

  test('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation {...props} />, div);
  });

  test('render button', () => {
    const nav = shallow(<Navigation {...props} />);
    expect(nav.find('button')).toHaveLength(1);
  });

  test('text', () => {
    const nav = shallow(<Navigation {...props} />);
    expect(nav.find('button').first().text()).toEqual(props.text);
  });
});
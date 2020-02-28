import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect'
import { Header } from './Header.js'
import { shallow } from 'enzyme'

describe('render a header', () => {
  const props = {
    routes: ['a', 'b', 'c'],
  }

  test('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header {...props} />, div);
  });

  test('render layout', () => {
    const header = shallow(<Header {...props} />);
    expect(header.find('ul')).toHaveLength(1)
  });

  test('not render Navigation', () => {
    const props = {
      routes: [],
    }
    const header = shallow(<Header {...props} />);
    expect(header.find('Navigation')).toHaveLength(0);
  });

  test('render Navigation', () => {
    const header = shallow(<Header {...props} />);
    expect(header.find('Navigation')).toHaveLength(3);
  });
})

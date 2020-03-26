import React from 'react';
import { shallow } from 'enzyme';
import LoginCard from './LoginCard.js';

describe('render LoginCardCard', () => {
  test('render LoginCardCard', () => {
    const wrapper = shallow(<LoginCard />);
    expect(wrapper.find('.login')).toHaveLength(1);
  });
});

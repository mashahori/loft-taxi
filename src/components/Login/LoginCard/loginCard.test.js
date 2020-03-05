import React  from 'react';
import LoginCard from './LoginCard.js';
import { shallow } from 'enzyme';

describe('render LoginCardCard', () => {
  test('render LoginCardCard', () => {
    const wrapper = shallow(<LoginCard />);
    expect(wrapper.find('.login')).toHaveLength(1);;
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import SignupCard from './SignupCard.js';

describe('render SignupCard', () => {
  test('render SignupCard', () => {
    const wrapper = shallow(<SignupCard />);
    expect(wrapper.find('.signup')).toHaveLength(1);
  });
});

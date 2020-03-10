import React  from 'react';
import SignupCard from './SignupCard.js';
import { shallow } from 'enzyme';

describe('render SignupCard', () => {
  test('render SignupCard', () => {
    const wrapper = shallow(<SignupCard />);
    expect(wrapper.find('.signup')).toHaveLength(1);;
  });
});
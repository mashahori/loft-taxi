import React  from 'react';
import ProfileCard from './ProfileCard.js';
import { shallow } from 'enzyme';

describe('render ProfileCard', () => {
  test('render ProfileCard', () => {
    const wrapper = shallow(<ProfileCard />);
    expect(wrapper.find('.form')).toHaveLength(1);;
  });
});
import React  from 'react';
import MapCard from './MapCard.js';
import { shallow } from 'enzyme';

describe('render MapCard', () => {
  test('render MapCard', () => {
    const wrapper = shallow(<MapCard />);
    expect(wrapper.find('.card')).toHaveLength(1);
  });
});
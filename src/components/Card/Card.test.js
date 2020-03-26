import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('render Card', () => {
  test('render Card', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('.card')).toHaveLength(1);
  });
});

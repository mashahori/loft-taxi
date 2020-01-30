import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect'
import Map from './Map.js'

describe('render a map', () => {
  test('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Map />, div);
  })
})
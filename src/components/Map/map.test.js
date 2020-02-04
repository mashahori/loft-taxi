import React from 'react';
import { render } from '@testing-library/react';
import Map from './Map.js';
import '@testing-library/jest-dom/extend-expect'

describe('render a map', () => {
  test('render without crashing', () => {
    render(<Map />);
    expect(Map).toBeTruthy();
  });
});
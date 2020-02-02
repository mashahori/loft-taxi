import React from 'react';
import { render } from '@testing-library/react';
import Signup from './Signup.js';
import '@testing-library/jest-dom/extend-expect'

describe('render a map', () => {
  test('render without crashing', () => {
    render(<Signup />);
    expect(Signup).toBeTruthy();
  });
});
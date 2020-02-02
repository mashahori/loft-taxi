import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile.js';
import '@testing-library/jest-dom/extend-expect'

describe('render a map', () => {
  test('render without crashing', () => {
    render(<Profile />);
    expect(Profile).toBeTruthy();
  });
});
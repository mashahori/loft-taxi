import React from 'react';
import { render } from '@testing-library/react';
import { LoginCard } from './LoginCard.js';
import '@testing-library/jest-dom/extend-expect'

describe('render a map', () => {
  test('render without crashing', () => {
    render(() => <LoginCard />);
    expect(<LoginCard />).toBeTruthy();
  });
});
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LoginCard } from './LoginCard.js';
import { Map } from '../Map/Map.js';
import '@testing-library/jest-dom/extend-expect'

describe('render a map', () => {
  test('render without crashing', () => {
    render(() => <LoginCard />);
    expect(<LoginCard />).toBeTruthy();
  });
});
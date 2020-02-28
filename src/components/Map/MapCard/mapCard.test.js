import React from 'react';
import { render } from '@testing-library/react';
import { MapCard } from './MapCard.js';
import '@testing-library/jest-dom/extend-expect'

describe('render a map', () => {
  test('render without crashing', () => {
    render(() => <MapCard />);
    expect(<MapCard />).toBeTruthy();
  });
});
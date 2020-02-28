import React from 'react';
import { render } from '@testing-library/react';
import { ProfileCard } from './ProfileCard.js';
import '@testing-library/jest-dom/extend-expect'

describe('render a map', () => {
  test('render without crashing', () => {
    render(() => <ProfileCard />);
    expect(<ProfileCard />).toBeTruthy();
  });
});

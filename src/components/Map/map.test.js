import React from 'react';
import { render } from '@testing-library/react';
import { Map } from './Map.js';
import { MapCard } from './MapCard/MapCard.js';
import '@testing-library/jest-dom/extend-expect'

describe('render a map', () => {
  test('render without crashing', () => {
    render(() => <Map />);
    expect(<Map />).toBeTruthy();
  });

  test('card does not exist', () => {
    const props = {
      cardIsExist: false,
    }
    render(() => <Map {...props}/>);
    expect(<MapCard />).toBeTruthy();
  });

  test('card exists', () => {
    const props = {
      cardIsExist: true,
    }
    render(() => <Map {...props}/>);
    expect(MapCard).toBeUndefined();
  });
});
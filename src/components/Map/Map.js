import React, { PureComponent } from 'react';
import mapboxgl from 'mapbox-gl';
import MapCard from './MapCard/MapCard.js'

mapboxgl.accessToken = 'pk.eyJ1IjoibXlha2ltZW5rbyIsImEiOiJjazV2NGs5bDQwOHBhM25sYjdoejN5YmlhIn0.jrA7S2ccVQ6ZuC3tU9wCbQ';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: 29,
      lat: 60,
      zoom: 7
    };

    this.mapRef = React.createRef()
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  setPage = () => {
    this.props.setPage('profile');
  }

  render() {
    return (
      <>
        <div ref={this.mapRef} style={{ height: '100vh', width: '100vw' }}/>
        <MapCard setPage={this.setPage} />
      </>
    );
  }
};

export default Map;

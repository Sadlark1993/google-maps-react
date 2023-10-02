import PropTypes from 'prop-types';
import * as Styled from './styles';

import { useState } from 'react';

//import { GoogleMapsProvider, useGoogleMap } from '@ubilabs/google-maps-react-hooks';

const mapOptions = {
  zoom: 10,
  center: {
    lat: 44.68,
    lng: -79.43,
  },
};

//didn't work
export const MapHook = () => {
  /* const [mapContainer, setMapContainer] = useState(null);

  return (
    <Styled.compStyle>
      <GoogleMapsProvider
        googleMapsAPIKey="AIzaSyCAsz6GgRhf9eV-yZVHTDNP5_N_3kb35Sk"
        options={mapOptions}
        mapContainer={mapContainer}
      >
        <div ref={(node) => setMapContainer(node)} style={{ height: '100vh' }} />
      </GoogleMapsProvider>
    </Styled.compStyle>
  ); */
};

MapHook.propTypes = {};

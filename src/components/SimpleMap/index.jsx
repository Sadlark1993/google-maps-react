import PropTypes from 'prop-types';
import * as Styled from './styles';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';

export const SimpleMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCAsz6GgRhf9eV-yZVHTDNP5_N_3kb35Sk',
  });

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Styled.compStyle>
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <MarkerF position={center} />
      </GoogleMap>
    </Styled.compStyle>
  );
};

SimpleMap.propTypes = {};

import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

import * as Styled from './styles';

import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';

export const PlaceAutocompleteInput = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCAsz6GgRhf9eV-yZVHTDNP5_N_3kb35Sk',
    libraries: ['places'], //explicits the used libraries
  });

  const [selected, setSelected] = useState(null);
  const center = useMemo(() => {
    if (!selected) return { lat: 44, lng: -80 };
    return selected;
  }, [selected]);

  useEffect(() => {}, []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Styled.compStyle>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        {selected && <MarkerF position={selected} />}
      </GoogleMap>
    </Styled.compStyle>
  );
};

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => <ComboboxOption key={place_id} value={description} />)}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

PlaceAutocompleteInput.propTypes = {};
PlacesAutocomplete.propTypes = {
  setSelected: PropTypes.func.isRequired,
};

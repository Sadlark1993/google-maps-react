import PropTypes from 'prop-types';
import * as Styled from './styles';
import { SimpleMap } from '../../components/SimpleMap';
import { PlaceAutocompleteInput } from '../../components/PlaceAutocompleteInput';

export const Home = () => {
  return (
    <Styled.compStyle>
      <div style={{ height: '100vh', width: '100%' }}>
        <PlaceAutocompleteInput />
      </div>
    </Styled.compStyle>
  );
};

Home.propTypes = {};

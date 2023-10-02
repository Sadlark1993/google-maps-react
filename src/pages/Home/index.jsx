import PropTypes from 'prop-types';
import * as Styled from './styles';
import { SimpleMap } from '../../components/SimpleMap';
import { PlaceAutocompleteInput } from '../../components/PlaceAutocompleteInput';

export const Home = ({ children }) => {
  return <Styled.compStyle>{children}</Styled.compStyle>;
};

Home.propTypes = {
  children: PropTypes.node,
};

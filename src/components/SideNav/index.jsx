import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

export const SideNav = () => {
  return (
    <Styled.compStyle>
      <Link to="/">Simple Map</Link>
      <Link to="/place-autocomplete">Place Autocomplete</Link>
    </Styled.compStyle>
  );
};

SideNav.propTypes = {};

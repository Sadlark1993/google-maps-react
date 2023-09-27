import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Map } from '../../components/Map';

export const Home = () => {
  return (
    <Styled.compStyle>
      <div style={{ height: '100vh', width: '100%' }}>
        <Map />
      </div>
    </Styled.compStyle>
  );
};

Home.propTypes = {};

import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}

  .map-container {
    width: 100%;
    height: 100%;
  }
`;

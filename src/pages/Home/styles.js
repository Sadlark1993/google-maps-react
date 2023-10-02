import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 250px 1fr;
    width: 100vw;
    height: 100vh;
  `}
`;

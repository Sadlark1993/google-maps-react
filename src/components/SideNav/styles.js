import styled, { css } from 'styled-components';

export const compStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    text-align: end;
    padding: 20px;
  `}
`;

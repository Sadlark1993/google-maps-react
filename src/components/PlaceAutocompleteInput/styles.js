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

  .places-container {
    margin: 0 auto;
    position: absolute;
    top: 0;
    z-index: 2;
    left: 50%; //a space 50% from the start to the left
    transform: translateX(-50%); //go back 50% of his size to the left. So, it centers
    top: 8px;
  }

  .combobox-input {
    width: 100%;
    padding: 0.5rem;
    outline-color: orange;
  }

  /*   .combobox-input:focus {
    outline-color: orange;
  } */
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1220px) {
    max-width: 1204px;
  }
`;

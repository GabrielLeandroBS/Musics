import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  bottom: 0;
  max-width: 100%;
  position: sticky;
  bottom: 1.5rem;
  z-index: 5;

  @media screen and (min-width: 1024px) {
    position: absolute;
  }
`;

export const Wrapper = styled.div`
  width: inherit;

  @media screen and (min-width: 1024px) {
    height: 5rem;
  }

  img {
    width: 1.5rem;
  }
`;

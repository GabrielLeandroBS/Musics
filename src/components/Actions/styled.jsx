import styled from "styled-components";

export const Container = styled.div`
  bottom: 0;
  bottom: 1.5rem;
  display: none;
  max-width: 100%;
  position: sticky;
  width: 100%;
  z-index: 5;

  @media screen and (min-width: 1024px) {
    display: block;
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

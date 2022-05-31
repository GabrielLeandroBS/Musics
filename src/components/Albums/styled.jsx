import styled from "styled-components";

export const Container = styled.section`
  margin-block: 2rem;
  display: none;

  @media screen and (min-width: 1024px){
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;

  figure {
    border-radius: 1rem;
    max-height: 14rem;
    overflow: hidden;
    width: 100%;

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: #e5e5e5;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  padding: 1em;
  width: 100%;

  @media screen and (min-width: 1024px) {
    padding: 4em;
  }
`;

export const Wrapper = styled.div`
  background: linear-gradient(118.73deg, #f4f4fd 2.47%, #dfddf3 100%);
  border-radius: 3rem;
  grid-column-gap: 0rem;
  height: 100%;
  margin: 0 auto;
  max-height: 60rem;
  max-width: 100rem;
  padding-block: 4em;
  width: 100%;
  overflow-y: scroll;
  height: 100rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 14rem 1fr;
    overflow: hidden;
    height: 100%;
  }
`;

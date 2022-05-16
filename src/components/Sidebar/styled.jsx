import styled from "styled-components";

export const Container = styled.aside`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-inline: 2rem;
  width: 100%;

  @media screen and (min-width: 1024px) {
   margin-bottom:0;
  }
`;

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  gap: 1.4rem;
  list-style-type: none;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  align-items: center;
  display: flex;
  gap: 1rem;

  img {
    height: 100%;
    width: 1rem;
  }

  a {
    color: #000000;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    transition: linear 0.3s all;

    &.active {
      color: #5f5f5f;
    }
  }
`;

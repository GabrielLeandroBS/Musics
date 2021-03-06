import styled from "styled-components";

export const Container = styled.aside`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding-inline: 2rem;
  width: 100%;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  gap: 1.4rem;
  list-style-type: none;
  padding: 0;
  margin: 0;

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

export const Footer = styled.footer`
  width: 100%;
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }

  a {
    align-items: center;
    color: #000000;
    display: flex;
    font-size: 0.8rem;
    font-weight: 600;
    justify-content: center;
    margin: 0;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }
`;

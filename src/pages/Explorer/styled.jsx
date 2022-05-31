import styled from "styled-components";

export const Container = styled.main`
  overflow-y: scroll;
  padding-inline: 2rem;
  width: 100%;

  @media screen and (min-width: 1024px) {
    overflow: hidden;
  }
`;

export const Topic = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
`;

export const Banner = styled.section`
  border-radius: 3rem;
  margin-block: 2rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-height: 25rem;

  @media screen and (min-width: 1024px) {
    height: 16rem;
    max-height: 100%;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const Figure = styled.figure`
  height: 100%;
  left: 0;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 100%;
  z-index: 0;

  img {
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  &::before {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.9023984593837535) 0%,
      rgba(255, 255, 255, 0.47942927170868344) 25%,
      rgba(255, 252, 252, 0.06766456582633051) 100%
    );
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 5;
  }
`;

export const Details = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 2rem;
  position: absolute;
  top: 0;
  z-index: 3;
`;

export const Category = styled.span`
  color: #b7b7c1;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Subtitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const WrapperButton = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  align-items: flex-start;
  gap: 2rem;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const Trends = styled.section`
  background-color: #ffffff;
  border-radius: 1rem;
  height: 20rem;
  overflow-y: scroll;
  padding: 3rem;

  @media screen and (min-width: 1024px) {
    width: 56%;
  }
`;

export const Adverts = styled.section`
  background-color: #ffffff;
  border-radius: 1rem;
  height: 20rem;
  margin-top: 2rem;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    margin-top: 0rem;
    width: 40%;
  }
`;

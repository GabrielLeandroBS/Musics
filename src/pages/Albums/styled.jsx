import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  overflow-y: scroll;
  padding-inline: 2rem;
  width: 100%;

  @media screen and (min-width: 1024px) {
    overflow: hidden;
  }

  .accordion {
    &-item {
      border-radius: 2rem;
      margin-bottom: 1rem;
      overflow: hidden;
    }

    &-button {
      font-size: 1.2rem;
      font-weight: 600;

      &:not(.collapsed) {
        background-color: transparent;
        color: #000000;
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  height: 100%;
  justify-items: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    overflow: hidden;
    display: flex;
    flex-direction: row;
  }
`;

export const WrapperAccordion = styled.div`
  max-height: 62vh;
  min-height: 10rem;
  overflow: auto;
  padding-right: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

export const Aside = styled.aside`
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;

  @media screen and (min-width: 1024px) {
    overflow-y: hidden;
    width: 40%;
  }

  position: relative;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Topic = styled.p`
  display: inline-block;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const AccordionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const AccordionContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const AccordionWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

export const DetailMusic = styled.span`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin: 0;

  h2,
  span {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
  }
`;

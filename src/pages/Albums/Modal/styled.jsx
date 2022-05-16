import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #000000b7;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 4em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 88;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  height: 100%;
  max-height: 60rem;
  max-width: 50rem;
  padding: 3rem;
  position: relative;
  width: 100%;
`;


export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.8rem;
  width: 100%;

  figure{
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;

    img{
      width: 100%;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Label = styled.label`
  align-items: flex-start;
  color: #666666;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 600;
  gap: 0.8rem;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;

  & > div {
    font-weight: 400;
    width: 100%;
  }

  // Changes to Select library
  .css-9gakcf-option {
    background-color: #fff;
    color: #666;

    &:hover {
      background-color: #deebff;
    }
  }
`;

export const Error = styled.span`
  color: #ff0000;
  display: inline;
  font-size: 1.1rem;
`;

export const Input = styled.input`
  border-radius: 0.8rem;
  border: 0.1rem solid #ccc;
  color: #666666;
  font-size: 1.2rem;
  font-weight: 400;
  max-height: 5.6rem;
  padding: 1rem;
  width: 100%;
  &:invalid {
    border-color: #ff0000;
  }
`;

export const Submit = styled.input`
  background-color: #000000;
  border-radius: 1rem;
  border: none;
  bottom: 3rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding-block: 1rem;
  padding-inline: 2rem;
  position: absolute;
  right: 3rem;
`;

export const WrapperButton = styled.div`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  color: #000;
  display: flex;
  height: 4rem;
  justify-content: center;
  overflow: hidden;
  width: 4rem;

  figure {
    align-items: center;
    background-color: #ffffff;
    display: flex;
    height: 4rem;
    justify-content: center;
    object-fit: contain;
    width: 100%;
  }

  img {
    width: 1.3rem;
  }
`;

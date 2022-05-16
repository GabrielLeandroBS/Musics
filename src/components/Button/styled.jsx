import styled from "styled-components";

export const Span = styled.span`
  background: ${(props) =>
    props.type === "primary" ? "black" : "transparent"};
  border-radius: 3rem;
  border: ${(props) => (props.type === "primary" ? "none" : "1px solid black")};
  color: ${(props) => (props.type === "primary" ? "white" : "black")};
  cursor: pointer;
  display: inline-block;
  font-size: 1.2rem;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  width: 11rem;

  span {
    font-family: "Inter", sans-serif;
  }
`;

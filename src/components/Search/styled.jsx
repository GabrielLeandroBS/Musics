import styled from "styled-components";

export const Form = styled.form`
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  -webkit-box-shadow: 0 1rem 3.2rem 0.5rem rgba(0, 0, 0, 0.02);
  border: none;
  box-shadow: 0 1rem 3.2rem 0.5rem rgba(0, 0, 0, 0.02);
  outline: none;
  padding: 1rem 2rem;
  position: relative;
  width: 100%;
`;

export const Animation = styled.div`
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 2rem;
  top: 0;
  z-index: 5;
`;

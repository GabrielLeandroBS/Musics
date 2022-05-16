import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  border-radius: 0.9rem;
  box-shadow: 0 0.4rem 0.5rem 0.2rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-block: 2rem;
  padding: 1rem;
  transition: all 0.3s linear;
  width: 100%;

  &:hover {
    background: #edebf6;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

export const Figure = styled.div`
  border-radius: 50%;
  height: 3rem;
  overflow: hidden;
  width: 3rem;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6;
  text-transform: capitalize;
`;

export const Subtitle = styled.p`
  color: #9d9ba6;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Time = styled.p`
  color: #9d9ba6;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2.2;
`;

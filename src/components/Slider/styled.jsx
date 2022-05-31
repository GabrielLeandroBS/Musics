import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  background-color: #fff;
  border-radius: 3.5rem;
  display: flex;
  height: 15rem;
  justify-content: center;
  margin-block: 2rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  
`;

export const Wrapper = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  img,
  .swiper {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  span {
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

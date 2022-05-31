import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     
  ::-webkit-scrollbar {
    width: 0;
    transition: all .3s linear;

    @media screen and (min-width: 1024px){
      width: .1rem;
    }
  }

  ::-webkit-scrollbar-track {
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #535353c0;
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #292929da;
  }
 }

  body, html {
    font-size: 10px;
    font-family: 'Inter', sans-serif;
  }

`;

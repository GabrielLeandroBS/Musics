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
      width: .5rem;
    }
  }

  ::-webkit-scrollbar-track {
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #535353;
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #292929;
  }
 }

  body, html {
    font-size: 10px;
    font-family: 'Inter', sans-serif;
  }

`;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

  *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 62.5%; // 1 rem === 10px
  }
  body{
    padding-left: 150px;
    font-size: 1.6rem; // happy rem :)
    font-family: "Montserrat", sans-serif
  }
`;

export default GlobalStyle;

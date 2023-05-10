import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'StratosSkyeng';
  src: local('StratosSkyeng'), local('StratosSkyeng'),
      url('../../public/fonts/Stratos-Regular.woff') format('woff2');
  font-weight: 400;
  font-style: normal;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after { 
  box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}

html,
body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #ffffff;
}

button {
    cursor: pointer;
}

ul li {
  list-style: none;
}
`;

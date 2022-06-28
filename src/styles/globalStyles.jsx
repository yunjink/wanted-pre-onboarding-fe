import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}

 * {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
 }

  button {
    border: none;
    outline: none;
  }
  

`;

export default GlobalStyles;

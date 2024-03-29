import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: 'CMU Serif', sans-serif;
                                                
    
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
  h1 {
    font-family: 'Dita Sweet', sans-serif;
}
h2 {
    font-family: 'Dita Sweet', sans-serif;
}
h3 {
    font-family: 'Dita Sweet', sans-serif;
}
h4 {
    font-family: 'Dita Sweet', sans-serif;
}
`;

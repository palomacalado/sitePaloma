import { BrowserRouter } from "react-router-dom";
import Nav from "../Components/Nav/nav";
import Ways from "../Ways";
import Contact from "../Components/Contact/contact";
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from "../styles/theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Contact />
        <Nav />
        <Ways />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

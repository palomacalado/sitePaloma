import { BrowserRouter } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Ways from "../Ways";
import Contact from "../Components/Contact/contact";
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from "../styles/theme";
import { AuthProvider } from "../contexts/auth";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Contact />
        <Nav />
        <Ways />
      </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

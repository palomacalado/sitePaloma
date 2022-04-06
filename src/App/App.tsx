import Nav from "../Components/Nav/Nav";
import Ways from "../Ways";
import { BrowserRouter } from "react-router-dom";
import Contact from "../Components/Contact/Contact";
import styled from "styled-components";

const GlobalStyle = styled.nav`
  background-color: #f0e7e2;
  width: 100vw;
  display: flex;
  flex-direction: column;
  font-family: "League Spartan", sans-serif;

`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle>
        <Contact />
        <Nav />
        <Ways />
      </GlobalStyle>
    </BrowserRouter>
  );
}

export default App;

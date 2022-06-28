import Nav from "../components/nav/nav";
import Ways from "../ways";
import { BrowserRouter } from "react-router-dom";
import Contact from "../components/contact/contact";
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
       
        <Ways/>
      </GlobalStyle>
    </BrowserRouter>
  );
}

export default App;

import styled from "styled-components";

import logo from "../../assets/images/P A L O M A.png";

const NavStyle = styled.div`
  height: 80px;
  width: 100vw;
  background-color: #98737b;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Hiperlink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #f0e7e2;
  margin: 5px;
  padding: 20px;
`;
const Image = styled.img`
  height: 75px;
`;

function Nav() {
  return (
    <NavStyle>
      <a href="/">
        <Image src={logo} alt="logo de Paloma" />
      </a>

      <div >
        <Hiperlink href="#sobre mim">Sobre mim</Hiperlink>
        <Hiperlink href="/projetos">Projetos</Hiperlink>
        <Hiperlink
          href="https://docs.google.com/document/d/1UTZL6MpGxkuoh8Z52xEc4wsaGBK9os8VFq17mBrxrNw/edit?usp=sharing"
          target="_blank"
        >
          Currículo vitae
        </Hiperlink>
      </div>
    </NavStyle>
  );
}

export default Nav;

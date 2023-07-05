import styled from 'styled-components';

import logo from '../../Assets/images/P A L O M A.png';
import { NavStyle, Image, Hiperlink } from './styles';

function Nav() {
  const token = localStorage.getItem('token');
  return (
    <NavStyle>
      <a href='/'>
        <Image src={logo} alt='logo de Paloma' />
      </a>

      <div>
        <Hiperlink href='/#sobre mim'>Sobre mim</Hiperlink>
        <Hiperlink href='/projetos'>Projetos</Hiperlink>
        <Hiperlink href={token ? '/comunidade' : '/login'}>
          Acesse a comunidade
        </Hiperlink>
        <Hiperlink
          href='https://docs.google.com/document/d/1UTZL6MpGxkuoh8Z52xEc4wsaGBK9os8VFq17mBrxrNw/edit?usp=sharing'
          target='_blank'
        >
          Currículo vitae
        </Hiperlink>
      </div>
    </NavStyle>
  );
}

export default Nav;

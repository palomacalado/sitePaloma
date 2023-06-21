import about from '../../Assets/images/sobremim .png';
import styled from 'styled-components';

const Image = styled.img`
  width: 600px;
`;

const AboutMeStyle = styled.nav`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Description = styled.div`
  padding: 20px;
`;
const H3 = styled.h3`
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
`;

const H4 = styled.h3`
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
`;

const Hiperlink = styled.a`
  color: #98737b;
`;
function AboutMe() {
  return (
    <AboutMeStyle>
      <div>
        <Image src={about} alt='colagem de fotos de Paloma Calado' />
      </div>
      <Description>
        <H3>A vida é curta demais para fazer uma coisa só!</H3>
        <p>
          {' '}
          Sou Paloma Calado, 27 anos, moradora do Compelexo da Maré, <br />
          conjunto de Favelas do Rio de Janeiro. Se você chegou até aqui é<br />
          porque está interessada em me conhecer meu trabalho, mas vamos por{' '}
          <br /> partes!
        </p>
        <p>
          Por muito tempo me senti culpada por não me interessar por um assunto{' '}
          <br />
          somente então, recentemente descobri que sou nada mais, nada menos{' '}
          <br />
          que <b>M U L T I P O T E N C I A L</b>. A partir dessa descoberta
          abracei minha
          <br />
          diversidade e aceitei que a menina programadora também ama costurar e
          crochetar!
          <H4>É sobre isso, e tá tudo bem!</H4>
        </p>
        Por aqui você encontrará meu trabalho como desenvolvedora e Criadora de
        conteúdo! <br />
        Para conhecer cada um com mais detalhes você pode clicar{' '}
        <Hiperlink href='/projetos'>
          {' '}
          <b>aqui</b>{' '}
        </Hiperlink>{' '}
        ou selecionar a aba Projetos
        <p></p>
      </Description>
    </AboutMeStyle>
  );
}

export default AboutMe;

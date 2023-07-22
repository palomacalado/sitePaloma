import { Grid } from '@material-ui/core';
import about from '../../Assets/images/sobremim .png';
import styled from 'styled-components';

export const Image = styled.img`
  height: 450px;
`;

const Description = styled.div`
  padding: 20px;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function AboutMe() {
  const year = new Date().getFullYear();
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <Image src={about} alt="colagem de fotos de Paloma Calado" />
      <Description>
        <h1>Conheça a pessoa por trás do trabalho!</h1>
        <br />
        <br />
        <p>
          Olá! Sou Paloma Calado, uma desenvolvedora e criadora de conteúdo com{' '}
          {year - 1995} anos de idade. Nasci e moro no Complexo da Maré, um
          conjunto de favelas no Rio de Janeiro. Se você está aqui, é porque
          está interessado em conhecer mais sobre o meu trabalho. Mas vamos com
          calma, vou te contar um pouco sobre mim!
        </p>
        <br />
        <p>
          Por muito tempo, senti-me culpada por não ter interesse em apenas uma
          área específica. No entanto, recentemente descobri que sou nada mais,
          nada menos do que uma <b>MULTIPOTENCIAL</b>. Aceitar minha diversidade
          foi libertador! Além de programar, adoro costurar e fazer crochê.
          Afinal, a vida é curta demais para se restringir a uma única paixão,
          não é mesmo?
        </p>
        <br />
        <p>
          Aqui no meu site, você encontrará meu trabalho como desenvolvedora e
          criadora de conteúdo. Para conhecê-los em detalhes, você pode clicar{' '}
          <a href="/projetos">aqui</a> ou navegar até a aba "Projetos".
        </p>
      </Description>
    </Grid>
  );
}

export default AboutMe;

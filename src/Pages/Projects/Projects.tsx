import React from 'react';
import Developer from '../../Components/Projects/developer';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ContentCreator from '../../Components/Projects/content-creator';

const Cards = styled.div`
  width: 100vw;
  display: flex;
  margin: 20px;
`;
export const Title = styled.div`
  justify-content: center;
  text-align: center;
  padding: 32px;
  h1 {
    font-size: 32px;
  }
`;

function Projects() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Title>
        <h1>Desenvolvedora</h1>
      </Title>
      <Cards>
        <Developer />
      </Cards>

      <Title>
        <h1>Criadora de conteúdo</h1>
      </Title>
      <Cards>
        <ContentCreator />
      </Cards>
    </Grid>
  );
}

export default Projects;

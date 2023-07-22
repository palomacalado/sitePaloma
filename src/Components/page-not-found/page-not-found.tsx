import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

function PageNotFound() {
  return (
    <Page>
      <h1>Página Inexistente</h1>
    </Page>
  );
}
export default PageNotFound;

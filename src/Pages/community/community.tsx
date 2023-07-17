import { Button, Grid } from '@material-ui/core';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CommunityStyle = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  background-color: #f77177;
  display: flex;
  justify-content: right;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

function Community() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      ></Grid>
    </>
  );
}

export default Community;

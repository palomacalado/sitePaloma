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
`

function Community() {
  const { user }: any = useContext(AuthContext)
 

  return (
    <>
<Grid
  container
  direction="column"
  justifyContent="flex-start"
  alignItems="flex-start"
>

      {user?.email === 'palomacalado@yahoo.com.br' && (
        <>
        <Link to="/novo-projeto-desenvolvedora">
          <Button variant="contained" size="small" color="secondary">
            Adicionar projeto desenvolvedora
          </Button>
        </Link>
        
        <Link to="/novo-projeto-criadora">
        <Button variant="contained" size="small" color="secondary">
          Adicionar projeto Criadora de conteúdo
        </Button>
      </Link>
        </>
      )}
         </Grid>
        </>
  )
}

export default Community;

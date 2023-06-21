import { Button } from '@material-ui/core';
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
  const { logout }: any = useContext(AuthContext)
  const { user }: any = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <CommunityStyle>
      {user?.email === 'palomacalado@yahoo.com.br' && (
        <Link to="/novo-projeto-desenvolvedora">
          <Button variant="contained" size="small" color="secondary">
            Adicionar projeto desenvolvedora
          </Button>
        </Link>
      )}
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={handleLogout}
      >
        Sair
      </Button>
    </CommunityStyle>
  )
}

export default Community;

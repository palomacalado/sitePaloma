import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import DeveloperForm from '../new-project/developer-form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CommunityStyle = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-image: radial-gradient(circle, #f0e7e2, #98737b);
  display: flex;
  justify-content: right;
  flex-direction: row;
  align-items: center;
`;

function Community() {
  const { logout }: any = useContext(AuthContext);
  const { user }: any = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <CommunityStyle>
      {user.email === 'palomacalado@yahoo.com.br' && (
        <Link to='/novo-projeto-desenvolvedora'>
          <Button variant='contained' size='large' color='secondary'>
            Adicionar projeto desenvolvedora
          </Button>
        </Link>
      )}
      <Button
        variant='contained'
        size='large'
        color='secondary'
        onClick={handleLogout}
      >
        Sair
      </Button>
    </CommunityStyle>
  );
}

export default Community;

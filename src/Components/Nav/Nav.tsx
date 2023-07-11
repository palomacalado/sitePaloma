import styled from 'styled-components';

import logo from '../../Assets/images/P A L O M A.png';
import { NavStyle, Image, Hiperlink } from './styles';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import React from 'react';
import defaultImage from '../../Assets/images/imageDefault.png';


function Nav() {
  const token = localStorage.getItem('token');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { logout }: any = useContext(AuthContext)

 
  const handleLogout = () => {
    logout()
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
      {token && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <Avatar alt="foto do usuário" src={defaultImage} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
              </Menu>
            </div>
          )}
    </NavStyle>
  );
}

export default Nav;

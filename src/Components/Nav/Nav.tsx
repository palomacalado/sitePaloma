import React, { useContext } from 'react';
import logo from '../../Assets/images/P A L O M A.png';
import { NavStyle, Image, Hiperlink } from './styles';
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AuthContext } from '../../contexts/auth';
import defaultImage from '../../Assets/images/imageDefault.png';
import { useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

function Nav() {
  const token = localStorage.getItem('token');

  const { logout, user }: any = useContext(AuthContext);
  const navigate = useNavigate();
  const userName = localStorage.getItem('name');
  const userEmail = localStorage.getItem('email');
  const userPhoto = localStorage.getItem('photo');
  const [anchorEla, setAnchorEla] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEla);
  const handleClickA = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEla(event.currentTarget);
  };
  const handleCloseA = () => {
    setAnchorEla(null);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <NavStyle>
      <a href="/">
        <Image src={logo} alt="logo de Paloma" />
      </a>

      <div>
        <Hiperlink href="/#sobre mim">Sobre mim</Hiperlink>
        <Hiperlink href="/projetos">Projetos</Hiperlink>
        <Hiperlink href={token ? '/comunidade' : '/login'}>
          Acesse a comunidade
        </Hiperlink>
        <Hiperlink
          href="https://docs.google.com/document/d/1UTZL6MpGxkuoh8Z52xEc4wsaGBK9os8VFq17mBrxrNw/edit?usp=sharing"
          target="_blank"
        >
          Currículo vitae
        </Hiperlink>
      </div>
      <div>
        {token && user && (
          <>
            Olá {userName?.replaceAll(`"`, '').toUpperCase()}!
            <Tooltip title="Perfil">
              <IconButton
                onClick={handleClickA}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  alt="foto do usuário"
                  src={userPhoto ? userPhoto.replaceAll(`"`, '') : defaultImage}
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEla}
              id="account-menu"
              open={open}
              onClose={handleCloseA}
              onClick={handleCloseA}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem
                onClick={() => {
                  navigate('/comunidade');
                  handleCloseA();
                }}
              >
                <Avatar /> Perfil
              </MenuItem>
              <Divider />
              {userEmail?.replaceAll(`"`, '') ===
                'palomacalado@yahoo.com.br' && (
                <>
                  <MenuItem
                    onClick={() => {
                      navigate('/novo-projeto-desenvolvedora');
                      handleCloseA();
                    }}
                  >
                    <ListItemIcon>
                      <AddCircleOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    Novo projeto desenvolvedora
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate('/novo-projeto-criadora');
                      handleCloseA();
                    }}
                  >
                    <ListItemIcon>
                      <AddCircleOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    Novo projeto criadora
                  </MenuItem>
                </>
              )}
              <MenuItem
                onClick={() => {
                  handleLogout();
                  handleCloseA();
                }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Sair
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
    </NavStyle>
  );
}

export default Nav;

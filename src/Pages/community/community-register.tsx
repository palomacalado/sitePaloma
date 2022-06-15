import {
  createStyles,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { AuthContext } from '../../contexts/auth';
import { getUsers } from '../../services/api';

const LoginStyle = styled.div`
  min-height: 100vh;
  background-image: radial-gradient(circle, #f0e7e2, #98737b);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  })
);
interface State {
  email: string;
  password: string;
  showPassword: boolean;
}
function CommunityRegister() {
  const classes = useStyles();
  const { login }: any = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [password

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    })();
  }, []);

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <LoginStyle>
      <TextField
        label='E-mail'
        id='filled-start-adornment'
        placeholder='Digite o e-mail'
        onChange={handleChange('email')}
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant='outlined'
      />

      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password'>
          Senha até 8 dígitos
        </InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          placeholder=' até 8 dígitos'
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>

      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password'>
          Confirme a senha
        </InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          placeholder=' até 8 dígitos'
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </LoginStyle>
  );
}

export default CommunityRegister;

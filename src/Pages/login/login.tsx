import {
  Button,
  createStyles,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  padding: 16px;
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
  }),
);

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}
function Login() {
  const classes = useStyles();
  const { login }: any = useContext(AuthContext);
  const [, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  if (loading) return <LoginStyle>Carregando os dados...</LoginStyle>;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <LoginStyle>
        <H1> Seja bem vinda! </H1>
        <TextField
          label="E-mail"
          id="filled-start-adornment"
          onChange={handleChange('email')}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <p>
          Não é cadastrada? <a href="/cadastro">Clica aqui </a> e cadatre-se
        </p>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          className={classes.margin}
          onClick={() => {
            login(values.email, values.password);
          }}
        >
          Entrar
        </Button>
      </LoginStyle>
    </Grid>
  );
}
export default Login;

import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import clsx from 'clsx';
import { postUser } from '../../services/post-user';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30vw',
        display: 'flex',
      },
    },
  }),
);

function FormCadastro() {
  const classes = useStyles();
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
    photo: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange =
    (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileReader = new FileReader();
      if (prop === 'photo' && event) {
        if (!event.target.files) return;
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = function () {
          setUser({ ...user, photo: JSON.stringify(fileReader.result) });
        };
      }
      setUser({ ...user, [prop]: event.target.value });
    };

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(user, 'enviou');

    await postUser(user);
  };

  const handleClickShowPassword = () => {
    setUser({ ...user, showPassword: !user.showPassword });
  };
  const handleClickShowConfirmPassword = () => {
    setUser({ ...user, showConfirmPassword: !user.showConfirmPassword });
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="name"
        label="Nome"
        required
        onChange={handleChange('name')}
      />
      <TextField
        id="email"
        label="Email"
        required
        onChange={handleChange('email')}
      />
      <TextField id="bio" label="Bio" required onChange={handleChange('bio')} />
      <input
        id="image"
        type="file"
        accept="image/*"
        required
        onChange={handleChange('photo')}
      />
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
        <Input
          id="outlined-adornment-password"
          type={user.showPassword ? 'text' : 'password'}
          value={user.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {user.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
        <Input
          id="outlined-adornment-password"
          type={user.showConfirmPassword ? 'text' : 'confirmPassword'}
          value={user.confirmPassword}
          onChange={handleChange('confirmPassword')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                edge="end"
              >
                {user.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button variant="contained" size="small" color="secondary" type="submit">
        concluir cadastro
      </Button>
    </form>
  );
}
export default FormCadastro;

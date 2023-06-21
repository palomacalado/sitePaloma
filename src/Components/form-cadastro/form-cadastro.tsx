import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core'
import { postUser } from '../../services/api'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import clsx from 'clsx'
import { log } from 'console'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30vw',
        display: 'flex'
      }
    }
  })
)

function FormCadastro() {
  const classes = useStyles()
  const [project, setProject] = useState<User>({
    name:'',
    email: '',
    password:'',
    bio: '',
    showPassword: false
  })

  const handleChange =
    (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value)
      setProject({ ...project, [prop]: event.target.value })
    }

  const onSubmit = async () => {
    // event.preventDefault();
    console.log(project);
    
    await postUser(project).then(()=>alert( 'Usuário cadastrado com sucesso!'));

  }
 
  const handleClickShowPassword = () => {
    setProject({ ...project, showPassword: !project.showPassword })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
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
      <TextField
        id="bio"
        label="Bio"
        required
        onChange={handleChange('bio')}
      />
     
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={project.showPassword ? 'text' : 'password'}
            value={project.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {project.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
     
      <Button variant="contained" size="small" color="secondary" type="submit">
        concluir cadastro
      </Button>
    </form>
  )
}
export default FormCadastro

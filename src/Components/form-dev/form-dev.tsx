import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Input } from '@material-ui/core';
import { postDeveloperProject } from '../../services/post-developer-project';
import { Alert, Grid } from '@mui/material';
0;
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

function FormDev() {
  const classes = useStyles();
  const [project, setProject] = useState<Card>({
    title: '',
    preview: '',
    image: '',
    description: '',
    type: 'developer',
  });

  const handleChange =
    (prop: keyof Card) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileReader = new FileReader();
      if (prop === 'image' && event) {
        if (!event.target.files) return;
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = function () {
          setProject({ ...project, image: JSON.stringify(fileReader.result) });
        };
      }
      setProject({ ...project, [prop]: event.target.value });
    };

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await postDeveloperProject(project).then((response) => {
      if (response?.props.severity === 'success') {
        return <Alert severity="success"> Cadastrado com sucesso! </Alert>;
      }
    });
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="Title"
          label="Título do projeto como desenvolvedora"
          required
          InputProps={{
            endAdornment: <div>{project.title.length}/15</div>,
            inputProps: {
              maxLength: 15,
            },
          }}
          onChange={handleChange('title')}
        />
        <TextField
          id="description"
          label="Descrição"
          required
          onChange={handleChange('description')}
        />
        <TextField
          id="Preview"
          label="Resumo do projeto"
          required
          onChange={handleChange('preview')}
        />
        <input
          id="image"
          type="file"
          accept="image/*"
          required
          onChange={handleChange('image')}
        />

        <Button
          variant="contained"
          size="small"
          color="secondary"
          type="submit"
        >
          Adicionar Projeto
        </Button>
      </form>
    </Grid>
  );
}
export default FormDev;

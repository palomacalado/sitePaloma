import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button, Input } from '@material-ui/core'
import { postContentProject} from '../../services/api'


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

function FormContent() {
  const classes = useStyles()
  const [contentProject, setContentProject] = useState<Card>({
    title: '',
    preview: '',
    image: '',
    description: ''
  })

  const handleChange =
    (prop: keyof Card) => (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value)
      const fileReader = new FileReader()
      if (!event.target.files) return;
      if (prop === 'image' && event) {
        fileReader.readAsDataURL(event.target.files[0])
        fileReader.onload = function () {
          setContentProject({ ...contentProject, image: JSON.stringify(fileReader.result) })
        }
      }
      setContentProject({ ...contentProject, [prop]: event.target.value })
      console.log(contentProject)
    }

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(contentProject);
    // await postContentProject(project);

  }
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="Title"
        label="Título do projeto"
        required
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

      <Button variant="contained" size="small" color="secondary" type="submit">
        Adicionar Projeto
      </Button>
    </form>
  )
}
export default FormContent

import styled from "styled-components";

import { useState } from "react";
import SaveProject from "../save-project/save-project";

import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Snackbar, SnackbarContent } from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axios from "axios";
import { Alert } from "@mui/material";

const Project = styled.div`
  width: 100vw;
  height: 100%;
`;
const Input = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-end;
  justify-content: flex-end;
`;

const Title = styled.h2`
  width: 100vw;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        display: "flex",
        flexWrap: "wrap",
        minWidth: 600,
        width: "100%",
      },
    },
    input: {
      display: "none",
    },
  })
);

function NewProject() {
  const classes = useStyles();
  const [projectTitle, setProjectTitle] = useState("");
  const [projectPreview, setProjectPreview] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  function saveProject(
    title: string,
    image: string,
    preview: string,
    description: string
  ) {
    const body = {
      title: title,
      image: image,
      preview: preview,
      description: description,
    };

    axios
      .post("http://www.localhost:3004/developer", body)
      .then(() => (
        <Alert severity="error">This is an error message!</Alert>
      ))
      .then(() => {
        setProjectTitle("");
        setProjectPreview("");
        setProjectImage("");
        setProjectDescription("");
      })
      .catch(() => (
        <Alert severity="error">
          Não foi possivel adicionar o projeto, tente novamente mais tarde!
        </Alert>
      ));
  }
  return (
    <Project>
      <Title> ADICIONE UM NOVO PROJETO COMO DESENVOLVEDORA </Title>
      <Input>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              required
              id="outlined-required"
              label="Título"
              variant="outlined"
              size="small"
              value={projectTitle}
              onChange={(event) => setProjectTitle(event.target.value)}
            />
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="secondary"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Adicione uma imagem
              </Button>
            </label>

            <TextField
              required
              id="outlined-multiline-static"
              label="Prévia"
              multiline
              rows={4}
              helperText="Contextualize o projeto."
              variant="outlined"
              value={projectPreview}
              onChange={(event) => setProjectPreview(event.target.value)}
            />
            <TextField
              required
              id="outlined-multiline-static"
              label="Descrição"
              multiline
              rows={4}
              helperText="Descreva o projeto"
              variant="outlined"
              value={projectDescription}
              onChange={(event) => setProjectDescription(event.target.value)}
            />

            <Button
              variant="contained"
              color="secondary"
              startIcon={<SaveIcon />}
              onClick={() =>
                saveProject(
                  projectTitle,
                  "projectImage",
                  projectPreview,
                  projectDescription
                )
              }
            >
              Salvar
            </Button>
          </div>
        </form>
      </Input>
    </Project>
  );
}

export default NewProject;

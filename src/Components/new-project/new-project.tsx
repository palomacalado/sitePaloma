import styled from "styled-components";

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Project = styled.div`
    width:100vw;
    height:100vh;
    `;
const Input = styled.div`
    width:60vw;
    height:60vh;
    margin: 3vw 0 0 22vw;
    
`;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                flexWrap: 'wrap',
                minWidth: 300,
                width: '100%',
                justifyContent: 'center',
            },
        },
        input: {
            display: 'none',
        },
    }),
);

function NewProject() {

    const classes = useStyles();

    return (<Project>
        <Input>
            <form className={classes.root} noValidate autoComplete="off">

                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Título"
                        variant="outlined"
                        size="small"
                    />
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="secondary" component="span" startIcon={<CloudUploadIcon />}>
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
                    />
                    <TextField
                    required
                        id="outlined-multiline-static"
                        label="Prévia"
                        multiline
                        rows={4}
                        helperText="Descreva o projeto"
                        variant="outlined"
                    />


                    <Button variant="outlined" color="secondary" startIcon={<SaveIcon />}>
                        Salvar
                    </Button>

                </div>
            </form>
        </Input>

    </Project>);

}

export default NewProject;
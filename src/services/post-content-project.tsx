import { Alert } from '@mui/material';
import { api } from './api';

export const postContentProject = async (body: Card) => {
  try {
    const token = localStorage.getItem('token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const manipulatedBody = {
      title: JSON.stringify(body.title),
      preview: JSON.stringify(body.preview),
      description: JSON.stringify(body.description),
      image: body.image,
    };

    api.post('/content-creator', manipulatedBody);
    return <Alert severity="success"> Projeto criado com sucesso! </Alert>;
  } catch (err) {
    console.log(err);
    return <Alert severity="error"> Erro!tente novamente mais tarde. </Alert>;
  }
};

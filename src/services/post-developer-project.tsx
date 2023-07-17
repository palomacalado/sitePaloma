import { Alert } from '@mui/material';
import { api } from './api';

export const postDeveloperProject = async (body: Card) => {
  try {
    const token = localStorage.getItem('token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const manipulatedBody = {
      title: JSON.stringify(body.title),
      preview: JSON.stringify(body.preview),
      description: JSON.stringify(body.description),
      image: body.image,
    };
    api.post('/developer', manipulatedBody);
    return <Alert severity="success"> Cadastrado com sucesso! </Alert>;
  } catch (err) {
    console.log(err);
  }
};

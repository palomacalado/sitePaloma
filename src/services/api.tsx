import axios from 'axios';
import Alert from '@mui/material/Alert';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const createSession = async (email: string, password: string) => {
  return api.post('/sessions', { email, password });
};

export const getUsers = async () => {
  const response = api.get('/users');
  return response;
};
export const getOnlyUser = async (id: string) => {
  const response = api.get(`/users/${id}`);
  return response;
};

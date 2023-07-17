import { api } from './api';

export const postUser = async (body: User) => {
  try {
    const token = localStorage.getItem('token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const manipulatedBody = {
      name: body.name,
      email: body.email,
      password: body.password,
      bio: body.bio,
      photo: body.photo,
    };

    console.log(manipulatedBody, 'body manipulado');
    return api.post('/users', manipulatedBody);
  } catch (err) {
    console.log(err);
  }
};

import { api } from './api';
import { useContext } from 'react';
import { ProjectsContext } from '../contexts/projects';

type InputDelete = {
  _id: string | undefined;
  type: string | undefined;
};

function DeleteCard({ type, _id }: InputDelete) {
  try {
    const token = localStorage.getItem('token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    if (type === 'developer') {
      api.delete(`/developer/${_id}`);
      window.location.reload();
    } else {
      api.delete(`/content-creator/${_id}`);
      window.location.reload();
    }
  } catch (err) {
    console.log(err);
  }
}
export default DeleteCard;

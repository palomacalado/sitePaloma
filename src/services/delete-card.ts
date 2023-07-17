import axios from 'axios';
import Alert from '@mui/material/Alert';
import { api } from './api';
import { useEffect, useContext, useState } from 'react';
import { ProjectsContext } from '../contexts/projects';

type InputDelete = {
  _id: string | undefined;
  type: string | undefined;
};

function DeleteCard({ type, _id }: InputDelete) {
  const { setDeveloperProjects, developerProjects }: any =
    useContext(ProjectsContext);
  developerProjects.filter((project: Card) => project._id === _id);

  try {
    const token = localStorage.getItem('token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    if (type === 'developer') {
      api.delete(`/developer/${_id}`);
    } else {
      api.delete(`/content-creator/${_id}`);
    }
  } catch (err) {
    console.log(err);
  }
}
export default DeleteCard;

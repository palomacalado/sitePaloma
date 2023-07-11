import axios from 'axios'
import Alert from '@mui/material/Alert';

export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export const createSession = async (email, password) => {
  return api.post('/sessions', { email, password })
}

export const getUsers = async () => {
  const response = api.get('/users')
return response
 
}
export const getOnlyUser = async (id) => {
  const response = api.get(`/users/${id}`)
  return response
}

export const postDeveloperProject = async (body: Card) => {
  try {
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const manipulatedBody = {
      title: JSON.stringify(body.title),
      preview: JSON.stringify(body.preview),
      description: JSON.stringify(body.description),
      image: body.image
    }
    return api.post('/developer', manipulatedBody)
    
  } catch (err) {
    console.log(err)
  }
}

export const postContentProject = async (body: Card) => {
  try {
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
    const manipulatedBody = {
      title: JSON.stringify(body.title),
      preview: JSON.stringify(body.preview),
      description: JSON.stringify(body.description),
      image: body.image
    }
    
    api.post('/content-creator', manipulatedBody)
    return <Alert severity="success"> Projeto criado com sucesso! </Alert >
  } catch (err) {
    console.log(err)
    return <Alert severity="error"> Erro!tente novamente mais tarde. </Alert >

  }
}

export const postUser = async (body: User) => {
  try {
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
    const manipulatedBody = {
      name:body.name,
      email:body.email,
      password: body.password,
      bio:body.bio,
      photo:body.photo,
      
    }
    
    console.log(manipulatedBody, "body manipulado")
    return api.post('/users', manipulatedBody)
  } catch (err) {
    console.log(err)
  }
}
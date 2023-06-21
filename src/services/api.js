import axios from 'axios'


export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export const createSession = async (email, password) => {
  return api.post('/sessions', { email, password })
}

export const getUsers = async () => {
  return api.get('/users')
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

export const postUser = async (body: User) => {
  try {
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const manipulatedBody = {
      email: JSON.stringify(body.email),
      password: JSON.stringify(body.password),
     
    }

    return api.post('/users', manipulatedBody)
  } catch (err) {
    console.log(err)
  }
}
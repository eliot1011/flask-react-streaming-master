import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/register', {
      username: newUser.username,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
    return axios
      .post('/login', {
        "username": user.username,
        "password": user.password
      })
      .then(response => {
        // localStorage.setItem('usertoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
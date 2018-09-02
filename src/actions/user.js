import ActionType from '../constants/ActionTypes'
import axios from 'axios';

export const email = (email) => ({
  type: '',
  email
})

export const username = (username) => ({
  type: '',
  username
})

export const password = (password) => ({
  type: '',
  password
})

export const registerUser = (obj) => {
  axios.post("http://localhost:4000/api/v1/sign_up",{
      obj
    })
    .then((response) => {
       // Handle the JWT response here
    })
    .catch((error) => {
       // Handle returned errors here
    });
}
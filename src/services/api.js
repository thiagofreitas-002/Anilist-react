import axios from 'axios'

<<<<<<< HEAD
export const api = axios.get({
  baseUrl: ""
=======
export const api = axios.create({
  baseURL: 'http://localhost:3333/',
})

export const apiTest = axios.create({
  baseURL: 'https://api.waifu.im/',
>>>>>>> beta
})

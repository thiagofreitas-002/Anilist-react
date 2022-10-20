import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
})

export const apiTest = axios.create({
  baseURL: 'https://api.waifu.im/',
})

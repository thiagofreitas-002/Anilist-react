import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
})

export const apiTest = axios.create({
  baseURL: 'https://api.waifu.im/',
})

export const apiTest2 = axios.create({
  baseURL: 'https://api.waifu.pics',
})

export const apiTest3 = axios.create({
  baseURL: 'https://yande.re/',
})

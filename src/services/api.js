import axios from 'axios'

export const key = '7f588326b5d6c4b9b6bb6fb400dae137e423615c'

export const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    Authorization: `Bearer ${key}`
  }
})

import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    "Authorization" : process.env.TOKEN_JWT
  },
  params : {
    "api_key" : process.env.API_KEY
  }
});

export default api;

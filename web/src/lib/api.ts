import axios from 'axios';

console.log(import.meta.env.VITE_BASE_API)

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API
})
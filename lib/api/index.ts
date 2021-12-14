import axios from 'axios';

const todoAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default todoAxios;

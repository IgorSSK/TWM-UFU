import axios from 'axios';

const api = axios.create({
  baseURL: 'http://104.45.236.150:3333'
})

export default api;

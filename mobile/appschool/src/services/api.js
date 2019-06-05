import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.17:3100/api/'
})

export default api;

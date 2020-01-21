import axios from 'axios';

const { API_URL = 'http://localhost:4001' } = process.env;

export const login = (requestData) => axios.post(`${API_URL}/api/login`, requestData);
export const getCode = (requestData) => axios.post(`${API_URL}/api/code`, requestData);

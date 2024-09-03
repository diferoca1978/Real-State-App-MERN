import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const realEstateApi = axios.create({
  baseURL: VITE_API_URL,
});

// TODO: Configure the interceptors to get the token

realEstateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('fhasdjkh');

  if (token) {
    config.headers['x-token'] = token;
  }

  return config;
});

export default realEstateApi;

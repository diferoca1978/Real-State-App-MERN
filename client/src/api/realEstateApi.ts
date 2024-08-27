import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const realEstateApi = axios.create({
  baseURL: VITE_API_URL,
});

// TODO: Configure the interceptors to get the token

export default realEstateApi;

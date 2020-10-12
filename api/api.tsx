import axios from 'axios';

let BASE_URL;
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:5000/api';
} else if (process.env.NODE_ENV === 'production') {
  //TO DO: Production url
  BASE_URL = '"http://localhost:5000/api"';
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

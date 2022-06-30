import axios from 'axios';
import { API_KEY, BASE_URL } from './config';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
});

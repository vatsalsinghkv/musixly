import axios from 'axios';
import { BASE_URL } from './config';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': `${process.env.API_KEY}`,
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
});

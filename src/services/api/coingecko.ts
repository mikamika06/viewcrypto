import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' 
  ? '/api/proxy?endpoint=' 
  : import.meta.env.VITE_COINGECKO_BASE_URL;
const coingeckoApi = axios.create({
  baseURL,
});

export { coingeckoApi };

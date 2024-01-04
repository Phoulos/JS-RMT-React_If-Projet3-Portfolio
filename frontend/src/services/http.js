import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
  }
});

export default http;
import axios from 'axios';

export const api = axios.create({
    baseURL: "https://prestaconc.onrender.com"
})
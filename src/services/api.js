import axios from 'axios';

export const api = axios.create({
    baseURL: "https://prestaconc.onrender.com" //"https://prestaconc.onrender.com" // "http://localhost:3333"// https://4bc9-191-36-207-135.ngrok-free.app
})
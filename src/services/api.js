// src/services/api.js
import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
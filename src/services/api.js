// src/services/api.js
import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// 로그인 시 토큰 설정
export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers['Authorization'];
    }
};

export default api;
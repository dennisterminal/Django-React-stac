import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants';

const apiUrl = "/choreo-apis/django-react-stac/backend/v1"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
export default api;
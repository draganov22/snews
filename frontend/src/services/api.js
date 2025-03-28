import axios from 'axios';

const API_URL = 'https://localhost:50056/api';

const api = axios.create({
  baseURL: API_URL, // Set base URL for all requests
});

export default api;

export const fetchNews = () => {
  return api.get('/news');
};

export const fetchNewsDetails = (newsId) => {
  return api.get(`/news/${newsId}`);
};
import axios from 'axios';

const API_URL = 'https://localhost:50056/api';

const api = axios.create({
  baseURL: API_URL, // Set base URL for all requests
});

// Add Authorization header for all requests except /login
api.interceptors.request.use((config) => {
  if (!config.url.includes('/login')) {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;

export const fetchNews = ({ categoryID, tags }) => {
  const params = {};
  if (categoryID) params.categoryId = categoryID;
  if (tags) params.tagIds = tags;

  return api.get('/news', { params });
};

export const fetchNewsDetails = (newsId) => {
  return api.get(`/news/${newsId}`);
};

export const deleteNews = (newsId) => {
  return api.delete(`/news/${newsId}`);
};
import axios from 'axios';

const API_URL = 'https://localhost:50056/api';

export const fetchNews = () => {
  return axios.get(`${API_URL}/news`);
};

export const fetchNewsDetails = (newsId) => {
  return axios.get(`${API_URL}/news/${newsId}`);
};
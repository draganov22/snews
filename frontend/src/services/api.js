import axios from 'axios';

const API_URL = 'http://localhost:5000/api/news';

export const fetchNews = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};

export const fetchNewsById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching news with id ${id}:`, error);
        throw error;
    }
};

export const addNews = async (newsItem) => {
    try {
        const response = await axios.post(API_URL, newsItem);
        return response.data;
    } catch (error) {
        console.error('Error adding news:', error);
        throw error;
    }
};
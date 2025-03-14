import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsForm = ({ newsId }) => {
  const [news, setNews] = useState({ title: '', content: '', categoryID: '', videoLink: '', images: [], tags: [] });
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    };

    const fetchTags = async () => {
      const response = await axios.get('/api/tags');
      setTags(response.data);
    };

    if (newsId) {
      const fetchNews = async () => {
        const response = await axios.get(`/api/news/${newsId}`);
        setNews(response.data);
      };
      fetchNews();
    }

    fetchCategories();
    fetchTags();
  }, [newsId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newsId) {
      await axios.put(`/api/news/${newsId}`, news);
    } else {
      await axios.post('/api/news', news);
    }
    // Redirect to news list or details
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={news.title} onChange={(e) => setNews({ ...news, title: e.target.value })} placeholder="Title" required />
      <textarea value={news.content} onChange={(e) => setNews({ ...news, content: e.target.value })} placeholder="Content" required />
      <select value={news.categoryID} onChange={(e) => setNews({ ...news, categoryID: e.target.value })} required>
        {categories.map(category => (
          <option key={category.categoryID} value={category.categoryID}>{category.name}</option>
        ))}
      </select>
      <input type="text" value={news.videoLink} onChange={(e) => setNews({ ...news, videoLink: e.target.value })} placeholder="Video Link" />
      <button type="submit">Save</button>
    </form>
  );
};

export default NewsForm;

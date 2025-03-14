import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('/api/news');
      setNews(response.data);
    };
    fetchNews();
  }, []);

  return (
    <div>
      {news.map((article) => (
        <div key={article.newsID}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;

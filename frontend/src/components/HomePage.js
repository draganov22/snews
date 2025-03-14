import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/api';

const HomePage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews()
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the news!', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to the Sports News Application</h1>
      <ul>
        {news.map(item => (
          <li key={item.newsID}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
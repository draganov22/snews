import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/api';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/login'; // Redirect to login page if not logged in
    }
  }, []);

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
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f8f9fa' }}>
        <h1>Sports News Application</h1>
        <div style={{ cursor: 'pointer' }} onClick={() => navigate('/favorites')}>
          <img src="/user-icon.png" alt="User Icon" style={{ width: '30px', height: '30px' }} />
        </div>
      </header>
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
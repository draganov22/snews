import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(`/api/news/${newsId}`);
      setNews(response.data);
    };
    fetchNews();
  }, [newsId]);

  if (!news) return <div>Loading...</div>;

  return (
    <div>
      <h2>{news.title}</h2>
      <p>{news.content}</p>
      {news.images && news.images.map((image, index) => (
        <img key={index} src={image.imageLink} alt={`News ${index}`} />
      ))}
      {news.videoLink && <video src={news.videoLink} controls />}
    </div>
  );
};

export default NewsDetails;

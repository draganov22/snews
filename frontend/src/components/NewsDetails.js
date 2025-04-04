import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNewsDetails } from "../services/api";

const NewsDetails = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetchNewsDetails(newsId);
      setNews(response.data);
    };
    fetchNews();
  }, [newsId]);

  if (!news) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => navigate("/")} class="link-btn mb-20">
        <span class="ficon ficon-chevrons-left"></span>Back to Home
      </button>
      <h2 class="mb-20">{news.title}</h2>
      {news.images &&
        news.images.map((image, index) => (
          <img key={index} src={image.imageLink} alt={`News ${index}`} />
        ))}
      <p class="text-justify">{news.content}</p>
      {news.videoLink && <video src={news.videoLink} controls />}
    </div>
  );
};

export default NewsDetails;

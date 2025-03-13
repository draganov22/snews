import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '../components/NewsItem';

const HomePage = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('/api/news');
                setNews(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Latest Sports News</h1>
            <div>
                {news.map((article) => (
                    <NewsItem key={article.articleId} article={article} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
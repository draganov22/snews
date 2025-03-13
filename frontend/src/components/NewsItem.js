import React from 'react';

const NewsItem = ({ article }) => {
    return (
        <div className="news-item">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p><strong>Category:</strong> {article.categoryId}</p>
            <p><strong>Tags:</strong> {article.tags.join(', ')}</p>
            {article.videoUrl && <iframe src={article.videoUrl} title="Video" />}
            {article.images && article.images.map((image, index) => (
                <img key={index} src={image} alt={`News related ${index}`} />
            ))}
            <p><em>Published on: {new Date(article.createdAt).toLocaleDateString()}</em></p>
        </div>
    );
};

export default NewsItem;
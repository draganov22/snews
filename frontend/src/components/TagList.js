import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TagList = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get('/api/tags');
      setTags(response.data);
    };
    fetchTags();
  }, []);

  return (
    <div>
      {tags.map((tag) => (
        <div key={tag.tagID}>
          <h2>{tag.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default TagList;

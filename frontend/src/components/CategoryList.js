import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category.categoryID}>
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;

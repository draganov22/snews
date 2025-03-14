import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserFavorites = () => {
  const [favorites, setFavorites] = useState({ favoriteCategory: null, favoriteTags: [] });
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const userId = 1; // Replace with actual user ID

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await axios.get(`/api/users/${userId}/favorites`);
      setFavorites(response.data);
    };

    const fetchCategories = async () => {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    };

    const fetchTags = async () => {
      const response = await axios.get('/api/tags');
      setTags(response.data);
    };

    fetchFavorites();
    fetchCategories();
    fetchTags();
  }, [userId]);

  const handleUpdateFavorites = async () => {
    await axios.put(`/api/users/${userId}/favorites`, {
      categoryId: favorites.favoriteCategory.categoryID,
      tagIds: favorites.favoriteTags.map(tag => tag.tagID)
    });
  };

  return (
    <div>
      <h2>Favorite Category</h2>
      <select
        value={favorites.favoriteCategory?.categoryID || ''}
        onChange={(e) => setFavorites({ ...favorites, favoriteCategory: categories.find(c => c.categoryID === parseInt(e.target.value)) })}
      >
        {categories.map(category => (
          <option key={category.categoryID} value={category.categoryID}>{category.name}</option>
        ))}
      </select>

      <h2>Favorite Tags</h2>
      {tags.map(tag => (
        <div key={tag.tagID}>
          <input
            type="checkbox"
            checked={favorites.favoriteTags.some(favTag => favTag.tagID === tag.tagID)}
            onChange={(e) => {
              const newFavoriteTags = e.target.checked
                ? [...favorites.favoriteTags, tag]
                : favorites.favoriteTags.filter(favTag => favTag.tagID !== tag.tagID);
              setFavorites({ ...favorites, favoriteTags: newFavoriteTags });
            }}
          />
          {tag.name}
        </div>
      ))}

      <button onClick={handleUpdateFavorites}>Update Favorites</button>
    </div>
  );
};

export default UserFavorites;

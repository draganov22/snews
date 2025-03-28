import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector for accessing state
import api from '../services/api'; // Updated import

const UserFavorites = () => {
  const userId = useSelector((state) => state.auth.userId); // Access userId from application state
  console.log('User ID:', userId); // Log userId for debugging
  const [favorites, setFavorites] = useState({ favoriteCategory: null, favoriteTags: [] });
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (!userId) return; // Ensure userId is available before making API calls

    const fetchFavorites = async () => {
      const response = await api.get(`/users/${userId}/favorites`);
      setFavorites(response.data);
    };

    const fetchCategories = async () => {
      const response = await api.get('/categories');
      setCategories(response.data);
    };

    const fetchTags = async () => {
      const response = await api.get('/tags');
      setTags(response.data);
    };

    fetchFavorites();
    fetchCategories();
    fetchTags();
  }, [userId]);

  const handleUpdateFavorites = async () => {
    if (!userId) return; // Ensure userId is available before updating
    await api.put(`/users/${userId}/favorites`, {
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
          <option key={category.categoryID} value={category.categoryID}>{category.categoryName}</option>
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
          {tag.tagName}
        </div>
      ))}

      <button onClick={handleUpdateFavorites}>Update Preferences</button>
    </div>
  );
};

export default UserFavorites;

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import BaseComponent from './BaseComponent';
import { updateFavorites } from '../features/auth/authSlice';

class UserFavorites extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      favorites: { favoriteCategory: null, favoriteTags: [] },
      categories: [],
      tags: [],
    };
  }

  componentDidMount() {
    const userId = this.props.userId; // Get userId from props
    if (!userId) return;

    const fetchFavorites = async () => {
      const response = await api.get(`/users/${userId}/favorites`);
      this.setState({ favorites: response.data });
    };

    const fetchCategories = async () => {
      const response = await api.get('/categories');
      this.setState({ categories: response.data });
    };

    const fetchTags = async () => {
      const response = await api.get('/tags');
      this.setState({ tags: response.data });
    };

    fetchFavorites();
    fetchCategories();
    fetchTags();
  }

  handleUpdateFavorites = async () => {
    const userId = this.props.userId; // Get userId from props
    if (!userId) return;

    const updatedFavorites = {
      categoryId: this.state.favorites.favoriteCategory.categoryID,
      tagIds: this.state.favorites.favoriteTags.map((tag) => tag.tagID),
    };

    await api.put(`/users/${userId}/favorites`, updatedFavorites);

    // Dispatch action to update auth store
    this.props.dispatch(updateFavorites(updatedFavorites));

    this.props.navigate('/'); // Use navigate passed as a prop
  };

  render() {
    const { favorites, categories, tags } = this.state;

    return (
      <div>
        <h2>Favorite Category</h2>
        <select
          value={favorites.favoriteCategory?.categoryID || ''}
          onChange={(e) =>
            this.setState({
              favorites: {
                ...favorites,
                favoriteCategory: categories.find(
                  (c) => c.categoryID === parseInt(e.target.value)
                ),
              },
            })
          }
        >
          {categories.map((category) => (
            <option key={category.categoryID} value={category.categoryID}>
              {category.categoryName}
            </option>
          ))}
        </select>

        <h2>Favorite Tags</h2>
        {tags.map((tag) => (
          <div key={tag.tagID}>
            <input
              type="checkbox"
              checked={favorites.favoriteTags.some(
                (favTag) => favTag.tagID === tag.tagID
              )}
              onChange={(e) => {
                const newFavoriteTags = e.target.checked
                  ? [...favorites.favoriteTags, tag]
                  : favorites.favoriteTags.filter(
                      (favTag) => favTag.tagID !== tag.tagID
                    );
                this.setState({
                  favorites: { ...favorites, favoriteTags: newFavoriteTags },
                });
              }}
            />
            {tag.tagName}
          </div>
        ))}

        <button onClick={this.handleUpdateFavorites}>Update Preferences</button>
        <button onClick={() => this.props.navigate('/')}>Cancel</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.userId, // Map userId from Redux store to props
});

// Wrapper component to inject navigate as a prop
const UserFavoritesWithNavigate = (props) => {
  const navigate = useNavigate();
  return <UserFavorites {...props} navigate={navigate} />;
};

export default connect(mapStateToProps)(UserFavoritesWithNavigate);

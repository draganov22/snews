import React from 'react';
import api from '../services/api';
import CategoryForm from './CategoryForm';
import BaseComponent from './BaseComponent';

class CategoryList extends BaseComponent {
  state = {
    categories: [],
    editingCategory: null,
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    try {
      this.clearError();
      const response = await api.get('/categories');
      this.setState({ categories: response.data });
    } catch (error) {
      this.setError('Error fetching categories.');
    }
  };

  handleEdit = (category) => {
    this.setState({ editingCategory: category });
  };

  handleEditSubmit = async (updatedCategory) => {
    try {
      this.clearError();
      await api.put(`/categories/${updatedCategory.categoryID}`, updatedCategory);
      this.setState((prevState) => ({
        categories: prevState.categories.map((category) =>
          category.categoryID === updatedCategory.categoryID ? updatedCategory : category
        ),
        editingCategory: null,
      }));
    } catch (error) {
      this.setError('Error updating category.');
    }
  };

  handleDelete = async (categoryID) => {
    try {
      this.clearError();
      await api.delete(`/categories/${categoryID}`);
      this.setState((prevState) => ({
        categories: prevState.categories.filter((category) => category.categoryID !== categoryID),
      }));
    } catch (error) {
      this.setError('Error deleting category.');
    }
  };

  handleCreateSubmit = async (newCategory) => {
    try {
      this.clearError();
      const response = await api.post('/categories', newCategory);
      this.setState((prevState) => ({
        categories: [...prevState.categories, response.data],
        editingCategory: null,
      }));
    } catch (error) {
      this.setError('Error creating category.');
    }
  };

  render() {
    const { categories, editingCategory } = this.state;

    return (
      <div>
        <h1>Category</h1>
        {editingCategory ? (
          <CategoryForm
            category={editingCategory}
            onSubmit={editingCategory.categoryID ? this.handleEditSubmit : this.handleCreateSubmit}
            onCancel={() => this.setState({ editingCategory: null })}
          />
        ) : (
          <>
            <button onClick={() => this.setState({ editingCategory: { categoryName: '' } })}>
              Create
            </button>
            {categories.map((category) => (
              <div key={category.categoryID}>
                <h2>{category.categoryName}</h2>
                <button onClick={() => this.handleEdit(category)}>✏️</button>
                <button onClick={() => this.handleDelete(category.categoryID)}>🗑️</button>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default CategoryList;

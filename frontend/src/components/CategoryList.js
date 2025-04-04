import React from "react";
import api from "../services/api";
import CategoryForm from "./CategoryForm";
import BaseComponent from "./BaseComponent";

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
      const response = await api.get("/categories");
      this.setState({ categories: response.data });
    } catch (error) {
      this.setError("Error fetching categories.");
    }
  };

  handleEdit = (category) => {
    this.setState({ editingCategory: category });
  };

  handleEditSubmit = async (updatedCategory) => {
    try {
      this.clearError();
      await api.put(
        `/categories/${updatedCategory.categoryID}`,
        updatedCategory
      );
      this.setState((prevState) => ({
        categories: prevState.categories.map((category) =>
          category.categoryID === updatedCategory.categoryID
            ? updatedCategory
            : category
        ),
        editingCategory: null,
      }));
    } catch (error) {
      this.setError("Error updating category.");
    }
  };

  handleDelete = async (categoryID) => {
    try {
      this.clearError();
      await api.delete(`/categories/${categoryID}`);
      this.setState((prevState) => ({
        categories: prevState.categories.filter(
          (category) => category.categoryID !== categoryID
        ),
      }));
    } catch (error) {
      this.setError("Error deleting category.");
    }
  };

  handleCreateSubmit = async (newCategory) => {
    try {
      this.clearError();
      const response = await api.post("/categories", newCategory);
      this.setState((prevState) => ({
        categories: [...prevState.categories, response.data],
        editingCategory: null,
      }));
    } catch (error) {
      this.setError("Error creating category.");
    }
  };

  render() {
    const { categories, editingCategory } = this.state;

    return (
      <div>
        <h1 class="page-title">Category</h1>
        {editingCategory ? (
          <CategoryForm
            category={editingCategory}
            onSubmit={
              editingCategory.categoryID
                ? this.handleEditSubmit
                : this.handleCreateSubmit
            }
            onCancel={() => this.setState({ editingCategory: null })}
          />
        ) : (
          <>
            <div class="hbox endbox mb-20">
              <button
                onClick={() =>
                  this.setState({ editingCategory: { categoryName: "" } })
                }
                class="main-btn primary"
              >
                Create
              </button>
            </div>
            <ul class="items-list">
              {categories.map((category) => (
                <li key={category.categoryID} class="hbox vcbox">
                  <div class="item-title flex-item">
                    {category.categoryName}
                  </div>
                  <button
                    onClick={() => this.handleEdit(category)}
                    class="img-btn ficon ficon-edit"
                  ></button>
                  <button
                    onClick={() => this.handleDelete(category.categoryID)}
                    class="img-btn ficon ficon-close-2"
                  ></button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default CategoryList;

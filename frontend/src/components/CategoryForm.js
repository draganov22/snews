import React, { useState } from "react";

const CategoryForm = ({ category, onSubmit, onCancel }) => {
  const [categoryName, setCategoryName] = useState(category.categoryName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...category, categoryName });
  };

  return (
    <form onSubmit={handleSubmit} class="ctrl-form">
      <div class="row">
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
          required
        />
      </div>
      <div class="row btn-wrap endbox">
        <button type="submit" class="main-btn primary">
          Save
        </button>
        <button type="button" class="main-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;

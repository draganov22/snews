import React, { useState } from 'react';

const CategoryForm = ({ category, onSubmit, onCancel }) => {
  const [categoryName, setCategoryName] = useState(category.categoryName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...category, categoryName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category Name"
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default CategoryForm;

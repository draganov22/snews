import React, { useState } from 'react';

const TagForm = ({ tag, onSubmit, onCancel }) => {
  const [tagName, setTagName] = useState(tag.tagName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...tag, tagName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
        placeholder="Tag Name"
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default TagForm;

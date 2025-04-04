import React, { useState } from "react";

const TagForm = ({ tag, onSubmit, onCancel }) => {
  const [tagName, setTagName] = useState(tag.tagName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...tag, tagName });
  };

  return (
    <form onSubmit={handleSubmit} class="ctrl-form">
      <div class="row">
        <input
          type="text"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          placeholder="Tag Name"
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

export default TagForm;

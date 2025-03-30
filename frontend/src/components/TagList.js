import React from 'react';
import api from '../services/api';
import TagForm from './TagForm';
import BaseComponent from './BaseComponent';

class TagList extends BaseComponent {
  state = {
    tags: [],
    editingTag: null,
  };

  componentDidMount() {
    this.clearError(); // Clear errors when the component mounts
    this.fetchTags();
  }

  fetchTags = async () => {
    try {
      const response = await api.get('/tags');
      this.setState({ tags: response.data });
    } catch (error) {
      this.setError('Error fetching tags', error);
    }
  };

  handleEdit = (tag) => {
    this.clearError(); // Clear errors when starting to edit
    this.setState({ editingTag: tag });
  };

  handleEditSubmit = async (updatedTag) => {
    try {
      this.clearError(); // Clear errors before submitting
      if (updatedTag.tagID) {
        await api.put(`/tags/${updatedTag.tagID}`, updatedTag);
        this.setState((prevState) => ({
          tags: prevState.tags.map(tag =>
            tag.tagID === updatedTag.tagID ? updatedTag : tag
          ),
          editingTag: null,
        }));
      } else {
        const response = await api.post('/tags', updatedTag);
        this.setState((prevState) => ({
          tags: [...prevState.tags, response.data],
          editingTag: null,
        }));
      }
    } catch (error) {
      this.setError('Error saving tag', error);
    }
  };

  handleDelete = async (tagID) => {
    try {
      this.clearError();
      await api.delete(`/tags/${tagID}`);
      this.setState((prevState) => ({
        tags: prevState.tags.filter(tag => tag.tagID !== tagID),
      }));
    } catch (error) {
      this.setError('Error deleting tag', error);
    }
  };

  render() {
    const { tags, editingTag } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ editingTag: { tagName: '' } })}>Create</button>
        {editingTag ? (
          <TagForm
            tag={editingTag}
            onSubmit={this.handleEditSubmit}
            onCancel={() => this.setState({ editingTag: null })}
          />
        ) : (
          tags.map((tag) => (
            <div key={tag.tagID}>
              <h2>{tag.tagName}</h2>
              <button onClick={() => this.handleEdit(tag)}>✏️</button>
              <button onClick={() => this.handleDelete(tag.tagID)}>🗑️</button>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default TagList;

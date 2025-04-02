import React from 'react';
import api from '../services/api';
import UserForm from './UserForm';
import BaseComponent from './BaseComponent';

class UserList extends BaseComponent {
  state = {
    users: [],
    editingUser: null,
  };

  componentDidMount() {
    this.clearError(); // Clear errors when the component mounts
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      this.clearError();
      const response = await api.get('/users');
      this.setState({ users: response.data });
    } catch (error) {
      this.setError('Error fetching users:', error);
    }
  };

  handleEdit = (user) => {
    this.clearError(); // Clear errors when starting to edit
    this.setState({ editingUser: user });
  };

  handleEditSubmit = async (updatedUser) => {
    try {
      this.clearError();
      await api.put(`/users/${updatedUser.userID}`, updatedUser);
      this.setState((prevState) => ({
        users: prevState.users.map((user) =>
          user.userID === updatedUser.userID ? updatedUser : user
        ),
        editingUser: null,
      }));
    } catch (error) {
      this.setError('Error updating user:', error);
    }
  };

  handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        this.clearError();
        await api.delete(`/users/${userId}`);
        this.setState((prevState) => ({
          users: prevState.users.filter((user) => user.userID !== userId),
        }));
      } catch (error) {
        this.setError('Error deleting user:', error);
      }
    }
  };

  handleCreateSubmit = async (newUser) => {
    try {
      this.clearError();
      const response = await api.post('/users', newUser);
      this.setState((prevState) => ({
        users: [...prevState.users, response.data],
        editingUser: null,
      }));
    } catch (error) {
      this.setError('Error creating user:', error);
    }
  };

  render() {
    const { users, editingUser } = this.state;

    return (
      <div>
        <h1>Users</h1>
        {editingUser ? (
          <UserForm
            user={editingUser}
            onSubmit={editingUser.userID ? this.handleEditSubmit : this.handleCreateSubmit}
            onCancel={() => this.setState({ editingUser: null })}
          />
        ) : (
          <>
            <button onClick={() => this.setState({ editingUser: { username: '', passwordHash: '', isAdmin: false } })}>
              Create
            </button>
            <ul>
              {users.map((user) => (
                <li key={user.userID}>
                  <h2>{user.username}</h2>
                  <button onClick={() => this.handleEdit(user)}>✏️</button>
                  <button onClick={() => this.handleDelete(user.userID)}>🗑️</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default UserList;

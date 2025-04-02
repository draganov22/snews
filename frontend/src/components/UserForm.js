import React, { useState, useEffect } from 'react';

const UserForm = ({ user: initialUser, onSubmit, onCancel }) => {
  const [user, setUser] = useState(initialUser || { username: '', passwordHash: '', isAdmin: false });

  useEffect(() => {
    setUser(initialUser || { username: '', passwordHash: '', isAdmin: false });
  }, [initialUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{initialUser ? 'Edit User' : 'Create User'}</h1>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="passwordHash"
          value={user.passwordHash}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Admin:
        <input
          type="checkbox"
          name="isAdmin"
          checked={user.isAdmin}
          onChange={(e) => setUser({ ...user, isAdmin: e.target.checked })}
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default UserForm;

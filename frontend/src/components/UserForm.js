import React, { useState, useEffect } from "react";

const UserForm = ({ user: initialUser, onSubmit, onCancel }) => {
  const [user, setUser] = useState(
    initialUser || { username: "", passwordHash: "", isAdmin: false }
  );

  useEffect(() => {
    setUser(initialUser || { username: "", passwordHash: "", isAdmin: false });
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
    <form onSubmit={handleSubmit} class="ctrl-form">
      <div class="row">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          required
        />
      </div>
      <div class="row">
        <input
          type="password"
          name="passwordHash"
          placeholder="Password"
          value={user.passwordHash}
          onChange={handleChange}
          required
        />
      </div>
      <div class="row gap-5">
        <input
          type="checkbox"
          name="isAdmin"
          checked={user.isAdmin}
          onChange={(e) => setUser({ ...user, isAdmin: e.target.checked })}
          class="ctrl-checkbox"
        />
        <label>Admin</label>
      </div>
      <div class="row btn-wrap endbox">
        <button type="submit" class="main-btn primary">
          Save
        </button>
        <button type="button" onClick={onCancel} class="main-btn">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;

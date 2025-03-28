import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { setUserId } from '../features/auth/authSlice'; // Import setUserId action
import axios from '../services/api';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch(); // Initialize useDispatch

  async function login(username, password) {
    setIsLoading(true);
    const user = { Username: username, PasswordHash: password };
    try {
      const response = await axios.post('/users/login', user);
      const data = response.data;
      localStorage.setItem('authToken', data.token);
      const decodedToken = jwt_decode(data.token);
      dispatch(setUserId(decodedToken.nameid)); // Dispatch setUserId with userId
      window.location.href = '/';
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
    setIsLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    setError('');
    login(username, password);
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import axios from '../services/api'; // Import axios instance

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to store error message
  const [isLoading, setIsLoading] = useState(false); // State to prevent multiple submissions

  async function login(username, password) {
    setIsLoading(true); // Set loading state to true
    const user = { Username: username, PasswordHash: password }; // Correct User model with proper casing
    try {
      const response = await axios.post('/users/login', user); // Use axios instance for API call
      const data = response.data;
      localStorage.setItem('authToken', data.Token); // Store token in LocalStorage
      window.location.href = '/'; // Redirect to homepage
    } catch (error) {
      setError('Login failed. Please check your credentials.'); // Set error message
    }
    setIsLoading(false); // Reset loading state
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return; // Prevent multiple submissions
    setError(''); // Clear previous error
    login(username, password);
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
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

import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch
import { setUserId } from "../features/auth/authSlice"; // Import setUserId action
import axios from "../services/api";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch(); // Initialize useDispatch

  async function login(username, password) {
    setIsLoading(true);
    const user = { Username: username, PasswordHash: password };
    try {
      const response = await axios.post("/users/login", user);
      const data = response.data;
      localStorage.setItem("authToken", data.token);
      const decodedToken = jwt_decode(data.token);
      dispatch(setUserId(decodedToken.nameid)); // Dispatch setUserId with userId
      window.location.href = "/";
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
    setIsLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    setError("");
    login(username, password);
  };

  return (
    <div class="login-page">
      <header className="site-header hbox vcbox">
        <div class="logo">
          <img src="images/logo.png" alt="Sports News" class="img-logo" />
        </div>
      </header>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div class="wrapper">
        <form onSubmit={handleSubmit} class="ctrl-form">
          <div class="row">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="row">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="btn-wrap hbox endbox mt-30">
            <button type="submit" disabled={isLoading} class="main-btn primary">
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

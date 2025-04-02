import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { setUserId } from './features/auth/authSlice'; // Import setUserId action
import App from './App';
import jwtDecode from 'jwt-decode'; // Import jwt-decode library

// Check for token in localStorage and set userId in the store
const token = localStorage.getItem('authToken');
if (token) {
  try {
    const payload = jwtDecode(token);
    const userId = payload.nameid;
    const role = payload.role;
    const favoriteCategoryID = payload.favoriteCategoryID;
    const tags = payload.tags;
    const expiry = payload.exp * 1000; // Convert expiry to milliseconds
    console.log('Decoded token:', payload);
    if (Date.now() > expiry) {
      localStorage.removeItem('authToken'); // Remove expired token
      window.location.href = '/login'; // Redirect to login page
    } else if (userId) {
      store.dispatch(setUserId({ userId, role, favoriteCategoryID, tags }));
    }
  } catch (error) {
    console.error('Failed to decode token:', error);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Register the service worker from the public folder
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch((error) => console.error('Service Worker registration failed:', error));
}
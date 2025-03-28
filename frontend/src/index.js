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
    const payload = jwtDecode(token); // Decode token using jwt-decode
    const userId = payload.nameid; // Extract userId
    if (userId) {
      store.dispatch(setUserId(userId)); // Dispatch setUserId action
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
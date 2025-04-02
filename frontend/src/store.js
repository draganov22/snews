import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice'; // Import your auth slice or reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your reducers here
  },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    role: null,
    favoriteCategoryID: null,
    tags: [],
  },
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload.userId;
      state.role = action.payload.role;
      state.favoriteCategoryID = action.payload.favoriteCategoryID;
      state.tags = action.payload.tags;
    },
    clearUser(state) {
      state.userId = null;
      state.role = null;
      state.favoriteCategoryID = null;
      state.tags = [];
    },
    updateFavorites(state, action) {
      state.favoriteCategoryID = action.payload.categoryId;
      state.tags = action.payload.tagIds.join(',');
    },
  },
});

export const { setUserId, clearUser, updateFavorites } = authSlice.actions;
export default authSlice.reducer;

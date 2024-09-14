import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'checking',
  currentUser: null,
  errorMsg: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    onStartLogin: (state) => {
      state.loading = true;
    },

    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.currentUser = payload;
      state.errorMsg = null;
      state.loading = false;
    },

    onLogOut: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.currentUser = null;
      state.errorMsg = payload;
      state.loading = false;
    },

    onClearError: (state) => {
      state.errorMsg = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onCkecking, onStartLogin, onLogin, onLogOut, onClearError } =
  userSlice.actions;

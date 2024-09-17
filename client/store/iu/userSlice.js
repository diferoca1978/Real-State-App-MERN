import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'not-authenticated',
  currentUser: null,
  errorMsg: undefined,
  loading: false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    onStartChecking: (state) => {
      state.loading = true;
    },

    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.currentUser = payload;
      state.errorMsg = undefined;
      state.loading = false;
    },

    onLogOut: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.currentUser = null;
      state.errorMsg = payload;
      state.loading = false;
    },

    onClearError: (state) => {
      state.errorMsg = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onStartChecking, onLogin, onRegister, onLogOut, onClearError } =
  userSlice.actions;

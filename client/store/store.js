import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './iu/userSlice';

export const store = configureStore({
  reducer: {
    ui: userSlice.reducer,
  },
});

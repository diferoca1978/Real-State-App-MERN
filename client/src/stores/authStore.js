import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const authStore = create(
  devtools((set) => ({
    currentUser: null,
    status: 'not-authenticated',
    errorMsg: undefined,
    loading: false,

    onStartLogin: () =>
      set((state) => ({
        loading: (state.loading = true),
        errorMsg: (state.errorMsg = undefined),
      })),

    onLogin: (payload) =>
      set((state) => ({
        loading: (state.loading = false),
        errorMsg: (state.errorMsg = undefined),
        currentUser: (state.currentUser = payload),
        status: (state.status = 'authenticated'),
      })),

    onLogOut: (payload) =>
      set((state) => ({
        loading: (state.loading = false),
        errorMsg: (state.errorMsg = payload),
        currentUser: (state.currentUser = null),
        status: (state.status = 'not-authenticated'),
      })),

    onClearErrorMsg: () =>
      set((state) => ({
        errorMsg: (state.errorMsg = undefined),
      })),
  }))
);

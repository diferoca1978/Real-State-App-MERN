import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserState {
  status: string;
  user: object;
  errorMessage: string | undefined;

  onChecking: () => void;
  onLogin: (payload: object) => void;
  onLogOut: (payload: string) => void;
  onClearError: () => void;
}

export const authStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        status: 'checking',
        user: {},
        errorMessage: undefined,

        onChecking: () =>
          set((state) => ({
            status: (state.status = 'checking'),
            user: (state.user = {}),
            errorMessage: (state.errorMessage = undefined),
          })),

        onLogin: (payload) =>
          set((state) => ({
            status: (state.status = 'authenticated'),
            user: (state.user = payload),
            errorMessage: (state.errorMessage = undefined),
          })),

        onLogOut: (payload) =>
          set((state) => ({
            status: (state.status = 'not-authenticated'),
            user: (state.user = {}),
            errorMessage: (state.errorMessage = payload),
          })),

        onClearError: () =>
          set((state) => ({
            errorMessage: (state.errorMessage = undefined),
          })),
      }),
      { name: 'userStore' }
    ),
    { name: 'authStore' }
  )
);

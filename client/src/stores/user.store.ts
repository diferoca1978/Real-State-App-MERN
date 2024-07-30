import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserState {
  status: string;
  user: object;
  errorMessage: undefined;

  onChecking: () => void;
}

export const authStore = create<UserState>()(
  devtools((set) => ({
    status: 'checking',
    user: {},
    errorMessage: undefined,

    onChecking: () =>
      set((state) => ({
        status: (state.status = 'checking'),
        user: (state.user = {}),
        errorMessage: (state.errorMessage = undefined),
      })),
  }))
);

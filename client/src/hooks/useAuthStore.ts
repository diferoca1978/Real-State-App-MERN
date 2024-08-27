import { realEstateApi } from '../api';
import { authStore } from '../stores/user.store';

type user = {
  email: string;
  password: string;
};

export const useAuthStore = () => {
  const status = authStore((state) => state.status);
  const user = authStore((state) => state.user);
  const errorMessage = authStore((state) => state.errorMessage);
  const { onChecking, onLogin, onLogOut, onClearError } = authStore();

  const startLogin = async ({ email, password }: user) => {
    onChecking();
    try {
      const { data } = await realEstateApi.post('/auth/login', {
        email,
        password,
      });
      console.log({ data });

      onLogin({ name: data.user.name, userId: data.user.userId });
    } catch (error) {
      console.log(error);
      onLogOut('Invalid credentials');
      setTimeout(() => {
        onClearError();
      }, 10);
    }
  };
  return {
    //* Properties
    status,
    user,
    errorMessage,
    //* Methods
    startLogin,
  };
};

import { realEstateApi } from '../api';
import { authStore } from '../stores/user.store';
//import Cookies from 'js-cookie';

type user = {
  email: string;
  password: string;
  token?: string;
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

      localStorage.setItem('fhasdjkh', data.user.token);
      onLogin({ name: data.user.name, userId: data.user.userId });
      return true;
    } catch (error: unknown) {
      console.log({ error });
      onLogOut('Invalid credentias');
      setTimeout(() => {
        onClearError();
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('fhasdjkh');

    if (!token) return onLogOut('');

    try {
      const { data } = await realEstateApi.get('/auth/renew');

      localStorage.setItem('fhasdjkh', data.token);

      onLogin({ name: data.name, userId: data.userId });
    } catch (error) {
      console.log(error);
      localStorage.clear();
      onLogOut('');
    }
  };

  const startLogOut = async () => {
    localStorage.clear(), onLogOut('');
  };

  return {
    //* Properties
    status,
    user,
    errorMessage,
    //* Methods
    startLogin,
    checkAuthToken,
    startLogOut,
  };
};

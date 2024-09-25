import realEstateApi from '../api/realEstateApi';
import { authStore } from '../stores';

export const useUiStore = () => {
  const status = authStore((state) => state.status);
  const currentUser = authStore((state) => state.currentUser);
  const errorMsg = authStore((state) => state.errorMsg);
  const loading = authStore((state) => state.loading);

  const { onStartLogin, onLogOut, onLogin, onClearErrorMsg } = authStore();

  const startLogin = async ({ email, password }) => {
    onStartLogin();

    try {
      const { data } = await realEstateApi.post('/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', data.user.token);

      onLogin({ name: data.user.name, userId: data.user.userId });
    } catch (error) {
      console.log(error);
      onLogOut('Invalid credentials');
      setTimeout(() => onClearErrorMsg(), 1000);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    onStartLogin();

    try {
      const { data } = await realEstateApi.post('/auth/register', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', data.user.token);
      onLogin({ name: data.user.name, userId: data.user._id });
    } catch (error) {
      console.log(error);
      onLogOut(error.response.data.message);
      setTimeout(() => onClearErrorMsg(), 1000);
    }
  };

  const startOnLogOut = () => {
    localStorage.clear();
    onLogOut();
  };

  const startCheckAuthTkn = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      return onLogOut();
    }

    try {
      const { data } = await realEstateApi.get('/auth/renew');
      localStorage.setItem('token', data.token);
      onLogin({ name: data.name, userId: data.uid });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //* properties
    status,
    currentUser,
    errorMsg,
    loading,

    //* methods
    startLogin,
    startOnLogOut,
    startRegister,
    startCheckAuthTkn,
  };
};

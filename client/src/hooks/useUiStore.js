import { useDispatch, useSelector } from 'react-redux';
import { onClearError, onLogin, onLogOut, onStartChecking } from '../../store';
import realEstateApi from '../api/realEstateApi';

export const useUiStore = () => {
  const { status, currentUser, errorMsg, loading } = useSelector(
    (state) => state.ui
  );
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onStartChecking());

    try {
      const { data } = await realEstateApi.post('/auth/login', {
        email,
        password,
      });

      localStorage.setItem('fhasdjkh', data.user.token);
      dispatch(
        onLogin({
          name: data.user.name,
          userId: data.user.userId,
          email: data.user.email,
          image: data.user.image,
        })
      );
    } catch (error) {
      console.log({ error });
      dispatch(onLogOut('Invalid credentials 🙊'));
      setTimeout(() => {
        dispatch(onClearError());
      }, 30);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    dispatch(onStartChecking());

    try {
      const { data } = await realEstateApi.post('/auth/register', {
        name,
        email,
        password,
      });

      console.log({ data });
      localStorage.setItem('fhasdjkh', data.user.token);
      dispatch(
        onLogin({
          name: data.user.name,
          userId: data.user._id,
          image: data.user.image,
        })
      );
    } catch (error) {
      console.log({ error });
      dispatch(onLogOut(error.response.data.message));
      setTimeout(() => {
        dispatch(onClearError());
      }, 30);
    }
  };

  const startUpdateUser = async ({ name, email, password, image }) => {
    dispatch(onStartChecking());
    try {
      const { data } = await realEstateApi.put(
        `/auth/update/${currentUser.userId}`,
        {
          name,
          email,
          password,
          image,
        }
      );
      console.log({ data });

      dispatch(
        onLogin({
          name: data.user.name,
          userId: data.user._id,
          image: data.user.image,
        })
      );
    } catch (error) {
      console.log({ error });
    }
  };

  const checkAuthTkn = async () => {
    const token = localStorage.getItem('fhasdjkh');
    if (!token) {
      return dispatch(onLogOut());
    }

    try {
      const { data } = await realEstateApi.get('/auth/renew');
      localStorage.setItem('fhasdjkh', data.user.token);
      dispatch(
        onLogin({
          name: data.user.name,
          userId: data.user._id,
          image: data.user.image,
        })
      );
    } catch (error) {
      console.log({ error });
      localStorage.clear();
      dispatch(onLogOut());
    }
  };

  const startLogOut = () => {
    localStorage.clear();
    dispatch(onLogOut());
  };

  return {
    // Properties
    status,
    currentUser,
    errorMsg,
    loading,

    // Methods
    startLogin,
    startRegister,
    startLogOut,
    checkAuthTkn,
    startUpdateUser,
  };
};

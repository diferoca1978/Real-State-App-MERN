import { useDispatch, useSelector } from 'react-redux';
import { onClearError, onLogin, onLogOut, onStartLogin } from '../../store';
import realEstateApi from '../api/realEstateApi';

export const useUiStore = () => {
  const { status, currentUser, errorMsg, loading } = useSelector(
    (state) => state.ui
  );
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onStartLogin());

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
      console.log(error);
      dispatch(onLogOut('Invalid credentials 🙊'));
      setTimeout(() => {
        dispatch(onClearError());
      }, 30);
    }
  };

  return {
    // Properties
    status,
    currentUser,
    errorMsg,
    loading,

    // Methods
    startLogin,
  };
};

import { Navigate, Outlet } from 'react-router-dom';
import { useUiStore } from '../../hooks';

export const PrivateRoute = () => {
  const { status } = useUiStore();

  if (status === 'checking') {
    return <div>Loading...</div>;
  }

  return status === 'authenticated' ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" />
  );
};

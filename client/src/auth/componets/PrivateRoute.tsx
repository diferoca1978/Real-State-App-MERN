import { useAuthStore } from '../../hooks/useAuthStore';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute: React.FC = () => {
  const { status } = useAuthStore();

  if (status === 'checking') {
    return <div>Loading...</div>;
  }

  return status === 'authenticated' ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" />
  );
};

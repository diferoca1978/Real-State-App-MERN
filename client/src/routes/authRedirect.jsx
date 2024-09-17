import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUiStore } from '../hooks';

// eslint-disable-next-line react/prop-types
export const AuthRedirect = ({ children }) => {
  const { status } = useUiStore();
  const location = useLocation();

  if (status === 'authenticated' && location.pathname === '/auth/login') {
    return <Navigate to="/" replace />;
  }

  if (status === 'authenticated' && location.pathname === '/auth/register') {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

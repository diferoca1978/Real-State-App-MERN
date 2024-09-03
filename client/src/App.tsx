import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRouter';
import { useAuthStore } from './hooks/useAuthStore';
import React, { useEffect } from 'react';

const App: React.FC = () => {
  const { checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

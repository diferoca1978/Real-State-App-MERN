import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRouter';
import { useEffect } from 'react';
import { useUiStore } from './hooks';

function App() {
  const { checkAuthTkn } = useUiStore();

  useEffect(() => {
    checkAuthTkn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

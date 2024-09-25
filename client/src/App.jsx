import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRouter';
import { useUiStore } from './hooks';

function App() {
  const { startCheckAuthTkn } = useUiStore();

  useEffect(() => {
    startCheckAuthTkn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import { NavBar } from '../shared/NavBar';
import { Footer } from '../shared/Footer';

export const MainLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

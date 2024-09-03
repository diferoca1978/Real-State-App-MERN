import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {
  AboutPage,
  ContactPage,
  HomePage,
  SearchPage,
} from '../realstate/pages';
import {
  CreateListingsPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
} from '../auth/pages';
import { MainLayout } from '../layout/MainLayout';
import { ErrorPage } from '../shared/ErrorPage';
import { PrivateRoute } from '../auth/componets';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* RealState Routes */}

      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>

      {/* Auth Routes */}

      <Route path="auth" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="createListing" element={<CreateListingsPage />} />
        </Route>
      </Route>
    </>
  )
);

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
import { LoginPage, RegisterPage, ProfilePage2 } from '../auth/pages';
import { MainLayout } from '../layout/MainLayout';
import { ErrorPage } from '../shared/ErrorPage';
import { PrivateRoute } from '../auth/componets';
import { AuthRedirect } from './authRedirect';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* RealState Routes */}
      <Route element={<AuthRedirect />} errorElement={<ErrorPage />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>

        {/* Auth Routes */}

        <Route path="auth" element={<MainLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage2 />} />
            {/* <Route path="createListing" element={<CreateListingsPage />} /> */}
          </Route>
        </Route>
      </Route>
    </>
  )
);

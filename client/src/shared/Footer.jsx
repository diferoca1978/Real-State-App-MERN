import { Package2Icon } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Separator } from '../components/ui/separator';

export const Footer = () => {
  return (
    <>
      <footer className="bg-primary border border-t-secondary py-8">
        <div className="container grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="grid gap-4">
            <NavLink
              to="/"
              className="flex items-center text-lg font-semibold gap-2 md:text-base text-primary-foreground"
            >
              <Package2Icon className="w-5 h-5" />
              <p className="font-bold text-2xl leading-none">Logo</p>
            </NavLink>
            <h4 className="leading-none font-medium">Our mission,</h4>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, exercitationem minima unde. tenetur id perspiciatis
            </p>
          </div>
          <Separator className="my-3 md:hidden" />
          <div className="grid gap-4 leading-none md:text-center">
            <h2 className="text-lg font-semibold ">Quick Links</h2>
            <nav className="grid gap-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-slate-50 hover:border-b hover:border-inherit'
                      : 'text-primary-foreground'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-slate-50 hover:border-b hover:border-inherit'
                      : 'text-primary-foreground'
                  }`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-slate-50 hover:border-b hover:border-inherit'
                      : 'text-primary-foreground'
                  }`
                }
              >
                Search
              </NavLink>
            </nav>
          </div>
          <Separator className="my-3 md:hidden" />
          <div className="grid gap-2 md:text-center">
            <h2 className="text-lg font-semibold ">Follow Us</h2>
            <div className="flex gap-8 md:justify-center">
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `${isActive ? 'text-slate-50' : 'text-primary-foreground'}`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </NavLink>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `${isActive ? 'text-slate-50' : 'text-primary-foreground'}`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </NavLink>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `${isActive ? 'text-slate-50' : 'text-primary-foreground'}`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

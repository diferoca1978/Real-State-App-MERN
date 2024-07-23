import { Facebook, Instagram, Package2Icon, Youtube } from 'lucide-react';
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
                <Facebook />
              </NavLink>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `${isActive ? 'text-slate-50' : 'text-primary-foreground'}`
                }
              >
                <Instagram />
              </NavLink>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `${isActive ? 'text-slate-50' : 'text-primary-foreground'}`
                }
              >
                <Youtube />
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

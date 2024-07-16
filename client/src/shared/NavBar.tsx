import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Menu, User, LogOut, Package2Icon } from 'lucide-react';
import { Separator } from '../components/ui/separator';

export const NavBar = () => {
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-primary px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center md:p-0">
          <div>
            <NavLink
              to="/"
              className="flex items-center text-lg font-semibold gap-2 md:text-base text-primary-foreground"
            >
              <Package2Icon className="w-5 h-5" />
              <p className="font-bold text-2xl leading-none">Logo</p>
            </NavLink>
          </div>

          <div>
            <nav className="container hidden flex-col text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? 'text-slate-50' : 'text-primary-foreground'}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? 'text-slate-50' : 'text-primary-foreground'}`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  `${isActive ? 'text-slate-50' : 'text-primary-foreground'}`
                }
              >
                Search
              </NavLink>

              <DropdownMenu>
                <DropdownMenuTrigger asChild className="text-inherit">
                  <Button className="p-0">SingIn</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-primary rounded-lg p-2 mt-1"
                >
                  <DropdownMenuLabel className="mb-2">Hello,</DropdownMenuLabel>
                  <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                    <NavLink to="/auth/login" className="flex gap-4">
                      Sing In
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                    <NavLink to="/auth/register" className="flex gap-4">
                      Sing Up
                    </NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild className="text-inherit">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-7 h-7"
                  >
                    <Avatar>
                      <AvatarImage src="#" alt="avatarImage" />
                      <AvatarFallback>UA</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Toogle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-primary rounded-lg p-2 mt-1"
                >
                  <DropdownMenuLabel className="mb-2 text-center border-b-2 border-secondary-foreground pb-1">
                    <p>Welcome !!</p>
                    <p>username</p>
                  </DropdownMenuLabel>
                  <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                    <NavLink to="/auth/profile" className="flex gap-4">
                      Profile
                      <User />
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-1 outline-none">
                    <Button
                      type="button"
                      variant="ghost"
                      className="flex gap-4 p-0 font-normal hover:bg-transparent hover:text-orange-500 "
                    >
                      Logout
                      <LogOut />
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild className="text-inherit">
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 md:hidden text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[200px] sm:w-[250px]">
            <nav className="grid gap-6 text-lg justify-start">
              <div>
                <h4>Hello,</h4>
                <p>username</p>
                <Separator className=" my-3" />
              </div>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? 'text-inherit' : 'text-inherit'}`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? 'text-slate-50' : 'text-primary-foreground'}`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  `${isActive ? 'text-slate-50' : 'text-primary-foreground'}`
                }
              >
                Search
              </NavLink>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-lg outline-none hover:bg-transparent hover:text-orange-500 p-0"
                  >
                    Sing In
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-primary rounded-lg p-2 mt-1"
                >
                  <DropdownMenuLabel className="mb-2">Hello,</DropdownMenuLabel>
                  <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                    <NavLink
                      to="/auth/login"
                      className="flex justify-between items-center"
                    >
                      Sing In
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                    <NavLink
                      to="/auth/register"
                      className="flex justify-between items-center"
                    >
                      Sing Up
                    </NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

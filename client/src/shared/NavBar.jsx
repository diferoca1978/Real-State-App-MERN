import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Menu, User, LogOut, Package2Icon } from 'lucide-react';
import { useUiStore } from '../hooks/useUiStore';

export const NavBar = () => {
  const { status, currentUser, startLogOut } = useUiStore();

  return (
    <>
      <header className="sticky z-10 top-0 w-full flex h-16 items-center gap-4 border-b bg-primary px-4 md:px-6">
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
              {status === 'not-authenticated' && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="text-inherit">
                    <Button variant="ghost" className="p-0 hover:bg-primary">
                      SingIn
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-primary rounded-lg p-2 mt-1"
                  >
                    <DropdownMenuLabel className="mb-2">
                      Hello,
                    </DropdownMenuLabel>
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
              )}
              {status === 'authenticated' && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="text-inherit">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-7 h-7 "
                    >
                      <Avatar className="md:w-9 md:h-9 border ">
                        <AvatarImage
                          src={currentUser.image}
                          alt="avatarImage"
                        />
                        <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
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
                      <p>{currentUser.name}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                      <NavLink to="/auth/profile" className="flex gap-4">
                        Profile
                        <User />
                      </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-1 outline-none">
                      <Button
                        onClick={startLogOut}
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
              )}
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
          <SheetContent
            side="left"
            className="w-[200px] sm:w-[250px] bg-secondary"
          >
            <SheetHeader className="mb-6">
              <SheetTitle className="text-lg mb-1">
                Hello, <p>{currentUser?.name}</p>
              </SheetTitle>
              {status === 'authenticated' && (
                <SheetDescription className="text-lg text-primary-foreground"></SheetDescription>
              )}
            </SheetHeader>
            <nav className="grid gap-6 text-lg justify-start">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? 'text-inherit' : ''}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? 'text-inherit' : ''}`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  `${isActive ? 'text-inherit' : ''}`
                }
              >
                Search
              </NavLink>
              {status === 'authenticated' ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="text-inherit">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-7 h-7"
                    >
                      <Avatar>
                        <AvatarImage
                          src={currentUser.image}
                          alt="avatarImage"
                        />
                        <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
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
                      <p>{currentUser.name}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                      <NavLink to="/auth/profile" className="flex gap-4">
                        Profile
                        <User />
                      </NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-1 outline-none">
                      <Button
                        onClick={startLogOut}
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
              ) : (
                status === 'not-authenticated' && (
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
                      <DropdownMenuLabel className="mb-2">
                        Hello,
                      </DropdownMenuLabel>
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
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

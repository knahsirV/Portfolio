import { Link, useNavigate } from "@tanstack/react-router";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "~/lib/utils";
import { useLocation } from "@tanstack/react-router";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

const NavBar = () => {
  const routes = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" },
  ];

  const currentRoute = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return currentRoute.pathname === path;
  };

  const handleNavigation = (path: string) => {
    navigate({ to: path });
  };

  // Common button styling
  const getNavButtonClasses = (isActive: boolean, size: "default" | "lg" = "default") => {
    return cn(
      buttonVariants({ variant: "secondary", size }),
      "uppercase hover:bg-foreground hover:text-background hover:rounded-full",
      isActive && "bg-foreground text-background rounded-full"
    );
  };

  // Navigation link component
  const NavLink = ({ route, onClick }: { route: (typeof routes)[0]; onClick?: () => void }) => (
    <Link to={route.path} className={getNavButtonClasses(isActive(route.path))} onClick={onClick}>
      {route.name}
    </Link>
  );

  // Mobile navigation item component
  const MobileNavItem = ({ route }: { route: (typeof routes)[0] }) => (
    <DrawerClose
      onClick={() => handleNavigation(route.path)}
      className={cn(getNavButtonClasses(isActive(route.path), "lg"), "text-lg")}
    >
      {route.name}
    </DrawerClose>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <div className='lg:flex font-mono hidden'>
        <div className='w-1/3'>
          <Link to='/' className={cn(buttonVariants({ variant: "default" }), "uppercase")}>
            Vrishank Viswanath
          </Link>
        </div>

        <div className='grow flex justify-center gap-3'>
          {routes.slice(0, 3).map((route, idx) => (
            <NavLink key={idx} route={route} />
          ))}
        </div>

        <div className='w-1/3 flex justify-end'>
          <NavLink route={routes[3]} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden font-mono'>
        <Drawer>
          <div className='flex justify-between'>
            <Link to='/' className={cn(buttonVariants({ variant: "default" }), "uppercase")}>
              Vrishank Viswanath
            </Link>

            <DrawerTrigger className={cn(buttonVariants({ variant: "secondary" }), "uppercase")}>
              Menu
            </DrawerTrigger>
          </div>

          <DrawerContent className='font-mono'>
            <div className='sr-only'>
              <DrawerTitle>Navigation Menu</DrawerTitle>
              <DrawerDescription>Navigation Menu</DrawerDescription>
            </div>

            <div className='flex flex-col h-full justify-center gap-4 mx-auto'>
              {routes.map((route, idx) => (
                <MobileNavItem key={idx} route={route} />
              ))}
            </div>
            <div className='flex mb-2 gap-4 font-mono items-center text-[.5rem]'>
              <img src='/C1.svg' alt='' className='size-2' />
              <span className='grow text-center uppercase'>Austin.2021</span>
              <img src='/C1.svg' alt='' className='size-2 ' />
              <img src='/C1.svg' alt='' className='size-2 grow' />
              <img src='/C1.svg' alt='' className='size-2 ' />
              <span className='grow text-center uppercase'>NYC.2025</span>
              <img src='/C1.svg' alt='' className='size-2' />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default NavBar;

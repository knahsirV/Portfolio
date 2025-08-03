import { Link } from "@tanstack/react-router";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "~/lib/utils";
import { useLocation } from "@tanstack/react-router";

const NavBar = () => {
  const centerRoutes = ["home", "about", "projects"];
  const currentRoute = useLocation();

  const matches = (route: string) => {
    return (
      currentRoute.pathname === "/" + route || (route === "home" && currentRoute.pathname === "/")
    );
  };

  return (
    <>
      <div className='flex font-mono'>
        <div className='w-1/3'>
          <Button className='uppercase'>Vrishank Viswanath</Button>
        </div>

        <div className='grow flex justify-center gap-3'>
          {centerRoutes.map((route) => (
            <Link
              to={"/" + route}
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "uppercase hover:bg-foreground hover:text-background hover:rounded-full",
                matches(route) && "bg-foreground text-background rounded-full"
              )}
            >
              {route}
            </Link>
          ))}
        </div>
        <div className='w-1/3 flex'>
          <Link
            to={"/contact"}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              " ml-auto uppercase hover:bg-foreground hover:text-background hover:rounded-full"
            )}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

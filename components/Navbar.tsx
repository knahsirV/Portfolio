import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 w-full">
      <div className="flex w-full items-center gap-8 p-8">
        <div className="w-full">
          <Logo size={"nav"} />
        </div>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;

import Link from "next/link";
// import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-20 w-full max-w-screen-2xl items-center gap-8 bg-[radial-gradient(circle_at_center,transparent_0.5px,#0f1115_1.5px)] px-8 backdrop-blur-sm [background-size:4px_4px] [mask-image:linear-gradient(rgb(0,_0,_0)_60%,rgba(0,_0,_0,_0)_100%)] md:h-36">
        <div className="w-full">
          {/* <Logo size={"nav"} /> */}
          <h1 className="font-[family-name:var(--logoFont)] text-3xl -tracking-widest text-green-500">
            vkv
          </h1>
        </div>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;

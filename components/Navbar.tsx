import Link from "next/link";

const navs = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
];

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10 flex items-center justify-between px-10 py-4 backdrop-blur-md'>
      <h1 className='text-2xl font-bold tracking-widest text-zinc-50'>
        hire<span className='rounded-sm bg-zinc-50 text-zinc-950'>{"{Vrishank}"}</span>
      </h1>
      <ul className='hidden md:flex'>
        {navs.map((nav, index) => (
          <li key={index}>
            <Link
              href={nav.link}
              className='rounded-lg px-3 py-2 text-sm font-semibold lowercase text-zinc-400 transition-all duration-200 hover:text-zinc-50'
            >
              <span>{nav.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href='/contact'>
        <button className='box-border hidden rounded border bg-zinc-50 px-3 py-2 text-sm font-bold lowercase tracking-widest transition duration-300 hover:border-zinc-50 hover:bg-zinc-950 hover:text-zinc-50 md:block'>
          Contact
        </button>
      </Link>
    </div>
  );
};

export default Navbar;

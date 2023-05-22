"use client";
import Link from "next/link";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navs } from "../ConstData/navs";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState(usePathname());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 overscroll-none border-b ${
        navbarOpen && "bg-zinc-950"
      } px-6 py-4 backdrop-blur transition-all duration-300 md:bg-transparent md:px-10 ${
        scrolled ? "border-zinc-900" : "border-transparent"
      } `}
    >
      <div className='flex grid-cols-[300px_1fr_300px] items-center justify-between md:grid'>
        <Link href='/#home' className='group text-2xl font-bold tracking-widest'>
          <span className=' rounded-sm text-zinc-50 transition duration-300 group-hover:bg-zinc-50 group-hover:text-zinc-950'>
            hire
          </span>
          <span className='rounded-sm bg-zinc-50 text-zinc-950 transition duration-300 group-hover:bg-zinc-950 group-hover:text-zinc-50'>
            {"{Vrishank}"}
          </span>
        </Link>
        <ul className='mx-auto hidden md:flex'>
          {navs.map((nav, index) => {
            const isActive = pathname === nav.link;
            return (
              <li key={index}>
                <Link
                  href={nav.link}
                  onClick={() => setPathname(nav.link)}
                  className={`text rounded-lg px-3 py-2 font-semibold lowercase ${
                    isActive ? "text-zinc-50 underline" : "text-zinc-400"
                  }  transition-all duration-200 hover:text-zinc-50`}
                >
                  <span>{nav.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href='/#contact'
          className='ml-auto box-border hidden w-min rounded-md border bg-zinc-50 px-3 py-2 text-sm font-bold lowercase tracking-widest transition duration-300 hover:border-zinc-50 hover:bg-zinc-950 hover:text-zinc-50 md:block'
        >
          Contact
        </Link>
        <button
          onClick={() => {
            setNavbarOpen(!navbarOpen);
          }}
          className='rounded-md bg-transparent px-2 py-1 text-zinc-50 transition duration-300 active:bg-zinc-50 active:text-zinc-950 md:hidden'
        >
          <Bars3BottomRightIcon className='h-8 w-8' />
        </button>
      </div>
      <div className={`mt-4 h-screen md:hidden ${navbarOpen ? "block" : "hidden"}`}>
        <Link
          href='/#contact'
          onClick={() => setNavbarOpen(false)}
          className='box-border block w-full rounded-md border bg-zinc-50 py-2 text-center text-lg font-bold lowercase tracking-widest transition duration-300 hover:border-zinc-50 hover:bg-zinc-950 hover:text-zinc-50'
        >
          Contact
        </Link>
        <ul className=''>
          {navs.map((nav, index) => {
            const isActive = pathname === nav.link;
            return (
              <li key={index}>
                <Link
                  href={nav.link}
                  onClick={() => {
                    setPathname(nav.link);
                    setNavbarOpen(false);
                  }}
                  className={`block border-b border-zinc-500 py-4 text-xl font-semibold lowercase  ${
                    isActive ? "text-zinc-50 underline" : "text-zinc-500"
                  }`}
                >
                  <span>{nav.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

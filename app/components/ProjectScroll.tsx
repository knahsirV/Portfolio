"use client";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const ProjectScroll = () => {
  const projects = [1, 2, 3];
  const [scrollIdx, setScrollIdx] = useState(0);
  const scroll = (direction: "left" | "right") => {
    const scrollTo = (scrollIdx + (direction === "left" ? -1 : 1)) * 314;
    if (scrollTo < 0 || scrollTo > 314 * (projects.length - 1)) return;
    const projectsContainer = document.getElementById("projects-container");
    if (!projectsContainer) return;
    projectsContainer.scrollTo({ left: scrollTo, behavior: "smooth" });
    setScrollIdx((prev) => {
      switch (direction) {
        case "left":
          return prev - 1;
        case "right":
          return prev + 1;
      }
    });
  };
  return (
    <div className='mt-6 flex justify-center gap-2 text-zinc-50 md:hidden'>
      <button
        onClick={() => scroll("left")}
        disabled={scrollIdx <= 0}
        className='rounded-full border px-3 transition-all enabled:border-zinc-50 enabled:active:bg-white enabled:active:text-black disabled:border-zinc-600 disabled:text-zinc-600'
      >
        <ArrowLongLeftIcon className='inline h-6 w-6' />
      </button>
      <button
        onClick={() => scroll("right")}
        disabled={scrollIdx >= projects.length - 1}
        className='rounded-full border px-3 transition-all enabled:border-zinc-50 enabled:active:bg-white enabled:active:text-black disabled:border-zinc-600 disabled:text-zinc-600'
      >
        <ArrowLongRightIcon className='inline h-6 w-6' />
      </button>
    </div>
  );
};

export default ProjectScroll;

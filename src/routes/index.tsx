import {
  BicycleIcon,
  BracketsAngleIcon,
  CodeBlockIcon,
  DesktopTowerIcon,
  GithubLogoIcon,
  GraduationCapIcon,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import PlayingCard from "~/components/PlayingCard";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <div className='flex my-4 lg:my-8 gap-4 font-mono items-center text-[.6rem]'>
        <img src='/C1.svg' alt='' className='size-3 hidden lg:block' />
        <img src='/C1.svg' alt='' className='size-3 hidden lg:block' />
        <img src='/C1.svg' alt='' className='size-3' />
        <span className='grow text-center uppercase'>Austin.2021</span>
        <img src='/C1.svg' alt='' className='size-3 ' />
        <img src='/C1.svg' alt='' className='size-3 grow' />
        <img src='/C1.svg' alt='' className='size-3 ' />
        <span className='grow text-center uppercase'>NYC.2025</span>
        <img src='/C1.svg' alt='' className='size-3' />
        <img src='/C1.svg' alt='' className='size-3 hidden lg:block' />
        <img src='/C1.svg' alt='' className='size-3 hidden lg:block' />
      </div>
      <h1 className='font-serif text-4xl font-bold lg:text-[6.8cqw] lg:text-center '>
        Nice to meet you! I'm Vrishank
      </h1>
      <div className='flex gap-8 justify-center my-6 lg:my-24 flex-wrap'>
        <PlayingCard name='Fullstack Dev' icon={CodeBlockIcon} className='bg-amber-200' />
        <PlayingCard name='Texas Ex' icon={GraduationCapIcon} className='bg-orange-200' />
        <PlayingCard name='Cyclist' icon={BicycleIcon} className='bg-sky-200' />
      </div>
      <div className='flex flex-col lg:flex-row items-end'>
        <div className='space-y-2 lg:space-y-4 grow '>
          <Badge className='font-mono uppercase'>Welcome</Badge>
          <p className='lg:text-2xl max-w-xl'>
            I like to build things that compromise neither form nor function—handling everything
            from pixel-perfect interfaces to scalable server architecture.{" "}
            <span className='text-primary/50'>Let's create something that works beautifully.</span>
          </p>
        </div>
        <div className='flex items-end gap-4'>
          <a href='https://www.linkedin.com/in/vrishank-v/' className='mt-auto'>
            <LinkedinLogoIcon size={"2rem"} />
          </a>
          <a
            // className={}
            href='https://github.com/knahsirV'
            className='mt-auto'
          >
            <GithubLogoIcon size={"2rem"} />
          </a>
          <a
            // className={}
            href='https://docs.google.com/document/d/1YfUxro-xYViLZKnkdRNI3wH28u6jbkA4FBssYvDHDUo'
            className='mt-auto -rotate-10'
          >
            <ReadCvLogoIcon size={"2rem"} />
          </a>
        </div>
      </div>
    </main>
  );
}

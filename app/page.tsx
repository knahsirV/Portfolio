import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowRightIcon,
  CopyIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="absolute inset-0 overflow-auto">
      <div className="relative flex h-svh flex-col overflow-hidden p-8">
        <h1 className="absolute left-[50%] top-[50%] -z-10 -translate-x-[50%] -translate-y-[50%] transform animate-[move-bg_3s_linear_infinite] bg-[radial-gradient(circle_at_center,#22c55e_0.04rem,transparent_0.04rem)] bg-[length:1.25rem_1.25rem] bg-clip-text pr-24 font-[family-name:var(--logoFont)] text-[20rem] font-bold italic -tracking-widest text-transparent md:text-[40rem]">
          vkv
        </h1>
        <div className="grid h-[70vh] place-items-center">
          <div className="gap-8 space-y-2 text-center md:flex md:text-left">
            <div className="mx-auto grid size-32 shrink-0 place-items-center rounded-full bg-green-500 bg-[url('/noise.png')] bg-contain bg-repeat bg-blend-soft-light md:size-48">
              <h1 className="bg-bunker-950 bg-[url('/noise.png')] bg-contain bg-clip-text bg-repeat pr-2.5 font-[family-name:var(--logoFont)] text-5xl font-bold italic -tracking-widest text-transparent bg-blend-soft-light md:text-7xl">
                vkv
              </h1>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold uppercase tracking-tight text-green-500 md:text-5xl">
                Hi! I&apos;m Vrishank
              </h1>
              <p className="max-w-sm text-xl font-medium tracking-tight md:text-3xl">
                Fullstack Engineer, Cyclist, Texas Ex, & Professional Eater
              </p>
              <div className="flex gap-2">
                <div className="flex-1 rounded-sm bg-bunker-950 bg-[url('/noise.png')] bg-repeat bg-blend-soft-light">
                  <div className="flex items-center justify-between gap-4 rounded-sm bg-bunker-800/15 px-4 py-2 font-[family-name:var(--codeFont)] text-sm md:text-base">
                    <span>vrishank@vrishank.net</span>
                    <CopyIcon className="size-4" />
                  </div>
                </div>
                <Button className="hidden h-auto flex-shrink-0 rounded-sm bg-amber-300 font-semibold text-amber-950 hover:bg-amber-300/75 md:inline-flex">
                  <FileTextIcon />
                  Resume
                </Button>
              </div>
              <div className="flex justify-end gap-2">
                <Button className="h-auto rounded-sm bg-amber-300 font-semibold text-amber-950 hover:bg-amber-300/75 md:hidden">
                  <FileTextIcon />
                  Resume
                </Button>
                <Button className="h-auto rounded-sm bg-red-400 font-semibold text-red-950 hover:bg-red-400/75">
                  <GitHubLogoIcon />
                  Github
                </Button>
                <Button className="h-auto rounded-sm bg-blue-500 font-semibold text-white/80 hover:bg-blue-500/75">
                  <LinkedInLogoIcon />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Image
          width={100}
          height={100}
          alt="dot-chevron-down"
          src="/dot-chevron-down.svg"
          className="animate-bob mx-auto size-12 flex-1"
        />
      </div>
      <div className="mx-auto mb-40 space-y-6 p-8 md:w-max">
        <p className="max-w-sm text-xl tracking-tight md:text-3xl">
          Nice to meet you! Glad you&apos;d like to get to know me.
        </p>
        <p className="max-w-lg text-xl tracking-tight md:text-3xl">
          I love bringing ideas to life, from napkin sketches to production,
          whenever I get the chance.
        </p>
        <div className="flex">
          <Button
            variant={"link"}
            className="ml-auto items-center p-0 text-xl [&_svg]:size-6"
          >
            Learn more about me
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className="mb-40 space-y-8 p-8 text-center">
        <div className="mx-auto max-w-2xl space-y-8">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Tech Stack
          </h1>
          <p className="text-xl tracking-tight md:text-3xl">
            Here are the technologies I&apos;ve used most because of work,
            school, and personal projects
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="justify-center gap-8 space-y-8 md:flex md:space-y-0">
            <div className="grid h-48 w-full max-w-80 place-items-center rounded-xl border border-bunker-800/20 bg-bunker-800/5">
              <Image
                width={100}
                height={100}
                alt="ts-icon"
                src="/ts-icon.svg"
                className="mx-auto size-24"
              />
            </div>
            <div className="grid h-48 w-full max-w-80 place-items-center rounded-xl border border-bunker-800/20 bg-bunker-800/5">
              <Image
                width={100}
                height={100}
                alt="react-icon"
                src="/react-icon.svg"
                className="mx-auto size-24"
              />
            </div>
          </div>
          <div className="justify-center gap-8 space-y-8 md:flex md:space-y-0">
            <div className="grid h-48 w-full max-w-80 place-items-center rounded-xl border border-bunker-800/20 bg-bunker-800/5">
              <Image
                width={100}
                height={100}
                alt="python-icon"
                src="/python-icon.svg"
                className="mx-auto size-24"
              />
            </div>
            <div className="grid h-48 w-full max-w-80 place-items-center rounded-xl border border-bunker-800/20 bg-bunker-800/5">
              <Image
                width={100}
                height={100}
                alt="java-icon"
                src="/java-icon.svg"
                className="mx-auto size-24"
              />
            </div>
            <div className="grid h-48 w-full max-w-80 place-items-center rounded-xl border border-bunker-800/20 bg-bunker-800/5">
              <Image
                width={100}
                height={100}
                alt="csharp-icon"
                src="/csharp-icon.svg"
                className="mx-auto size-24"
              />
            </div>
          </div>
          <div className="justify-center gap-8 space-y-8 md:flex md:space-y-0">
            <div className="grid h-48 w-full max-w-80 place-items-center rounded-xl border border-bunker-800/20 bg-bunker-800/5">
              <Image
                width={100}
                height={100}
                alt="gcp-icon"
                src="/gcp-icon.svg"
                className="mx-auto size-24"
              />
            </div>
            <div className="grid h-48 w-full max-w-80 place-items-center rounded-xl border border-bunker-800/20 bg-bunker-800/5">
              <Image
                width={100}
                height={100}
                alt="postgres-icon"
                src="/postgres-icon.svg"
                className="mx-auto size-24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

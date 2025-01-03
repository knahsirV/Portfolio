import { cva, type VariantProps } from "class-variance-authority";

const logoVariants = cva(
  "grid shrink-0 place-items-center rounded-full bg-green-500 bg-[url('/noise.png')] bg-contain bg-repeat bg-blend-soft-light",
  {
    variants: {
      size: {
        hero: "size-32 md:size-48",
        nav: "size-14",
      },
    },
    defaultVariants: {
      size: "hero",
    },
  },
);

const textVariants = cva(
  "bg-bunker-950 bg-[url('/noise.png')] bg-contain bg-clip-text bg-repeat text-center font-[family-name:var(--logoFont)] font-bold italic -tracking-widest text-transparent bg-blend-soft-light",
  {
    variants: {
      size: {
        hero: "text-5xl md:text-7xl pr-2.5",
        nav: "text-2xl pr-1.5",
      },
    },
    defaultVariants: {
      size: "hero",
    },
  },
);

type LogoProps = VariantProps<typeof logoVariants>;

const Logo = ({ size }: LogoProps) => {
  return (
    <div className={logoVariants({ size })}>
      <h1 className={textVariants({ size })}>vkv</h1>
    </div>
  );
};

export default Logo;

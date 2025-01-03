import type { Metadata } from "next";
import {
  Gabarito as Font,
  Shrikhand as LogoFont,
  Geist_Mono as CodeFont,
} from "next/font/google";
import "./globals.css";
// import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

const font = Font({
  variable: "--font",
  subsets: ["latin"],
});

const logoFont = LogoFont({
  variable: "--logoFont",
  weight: "400",
  subsets: ["latin"],
});

const codeFont = CodeFont({
  variable: "--codeFont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hire{Vrishank}",
  description: "Vrishank Viswanath Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${logoFont.variable} ${codeFont.variable} scrollbar-hide fixed inset-0 bg-bunker-950 bg-[url('/noise.png')] bg-repeat antialiased bg-blend-soft-light selection:bg-green-500 selection:text-bunker-950`}
      >
        {/* <FollowerPointerCard>{children}</FollowerPointerCard> */}
        <div className="relative mx-auto max-w-screen-2xl">
          <Navbar />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

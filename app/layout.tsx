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
import Overlay from "@/components/Overlay";

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
        className={`${font.className} ${logoFont.variable} ${codeFont.variable} bg-bunker-950 antialiased selection:bg-green-500 selection:text-bunker-950`}
      >
        <Navbar />
        {children}
        <Overlay />
        <Toaster />
      </body>
    </html>
  );
}

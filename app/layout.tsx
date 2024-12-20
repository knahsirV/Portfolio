import type { Metadata } from "next";
import {
  Gabarito as Font,
  Shrikhand as LogoFont,
  Geist_Mono as CodeFont,
} from "next/font/google";
import "./globals.css";

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
        className={`${font.className} ${logoFont.variable} ${codeFont.variable} fixed inset-0 overscroll-none bg-bunker-950 bg-[url('/noise.png')] bg-repeat antialiased bg-blend-soft-light`}
      >
        {children}
      </body>
    </html>
  );
}

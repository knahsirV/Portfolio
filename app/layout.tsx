import "./globals.css";
import { Urbanist } from "next/font/google";

export const metadata = {
  title: "hire{Vrishank}",
  description: "Vrishank Viswanath's developer portfolio website.",
};

const urbanist = Urbanist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`scroll-smooth bg-zinc-950 selection:bg-indigo-500 selection:text-white ${urbanist.className}`}
      >
        {children}
      </body>
    </html>
  );
}

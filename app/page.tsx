import Navbar from "@/app/components/Navbar";
import HomeClient from "./components/HomeClient";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className='mx-auto min-h-screen max-w-6xl p-6 lowercase md:w-3/4 md:p-10'>
        <HomeClient />
      </main>
    </>
  );
}

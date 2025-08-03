import { BicycleIcon, DesktopTowerIcon, GraduationCapIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import PlayingCard from "~/components/PlayingCard";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <h1 className='recoleta text-7xl lg:text-9xl font-bold mt-8 mb-8'>Hi. I'm Vrishank</h1>
      <div className='flex gap-8'>
        <PlayingCard name='Fullstack Dev' icon={DesktopTowerIcon} className='bg-amber-200' />
        <PlayingCard name='Texas Ex' icon={GraduationCapIcon} className='bg-orange-200' />
        <PlayingCard name='Cyclist' icon={BicycleIcon} className='bg-sky-200' />
      </div>
    </main>
  );
}

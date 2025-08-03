import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <h1 className='recoleta text-9xl font-bold mt-8'>Hi. I'm Vrishank</h1>
    </main>
  );
}

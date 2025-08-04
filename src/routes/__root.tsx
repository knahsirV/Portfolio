/// <reference types="vite/client" />
import * as React from "react";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "~/styles/app.css?url";
import NavBar from "~/components/NavBar";

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <HeadContent />
      </head>
      <body className=' selection:bg-black selection:text-foreground '>
        <div className='p-8'>
          <NavBar />
          {children}
        </div>
        {/* <TanStackRouterDevtools position='bottom-right' /> */}
        <Scripts />
      </body>
    </html>
  );
}

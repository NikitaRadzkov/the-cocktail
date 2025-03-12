import "@/app/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "@/app/App.tsx";
import { SWRProvider } from "@/app/providers";
import routes from "@/app/routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRProvider>
      <App>
        <RouterProvider router={router} />
      </App>
    </SWRProvider>
  </StrictMode>,
);

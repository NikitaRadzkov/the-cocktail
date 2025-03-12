import { RouteObject } from "react-router";

import { ROUTES } from "@/shared/config";
import loadable from "@/shared/libs/loadable";
import Loading from "@/shared/ui/loading";

const NotFound = loadable(() => import("@/pages/not-found"));
const Home = loadable(() => import("@/pages/home"));

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    errorElement: <NotFound />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
];

export default routes;

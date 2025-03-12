import { lazy, Suspense } from "react";

import Loading from "../ui/loading";

const loadable = (factory: Parameters<typeof lazy>[0]) => () => {
  const Component = lazy(factory);

  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

export default loadable;

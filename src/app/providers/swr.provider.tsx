import type { PropsWithChildren } from "react";
import { SWRConfig } from "swr";

import axiosInstance from "@/shared/libs/axios-instance";

const cacheProvider = () => new Map();

export const SWRProvider = ({ children }: PropsWithChildren<object>) => {
  return (
    <SWRConfig
      value={{
        provider: cacheProvider,
        fetcher: async (url, config) => {
          const response = await axiosInstance.get(url, {
            ...config,
          });

          return response.data;
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

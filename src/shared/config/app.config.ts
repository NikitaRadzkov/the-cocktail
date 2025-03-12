import { ENV } from "./env.config";

export const AppConfig = {
  name: "the-cocktail",
  urls: {
    api: process.env[ENV.API_URL],
  } as const,
} as const;

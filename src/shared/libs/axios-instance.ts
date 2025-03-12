import axios from "axios";

import { AppConfig } from "@/shared/config";

const axiosInstance = axios.create({
  baseURL: AppConfig.urls.api,
});

export default axiosInstance;

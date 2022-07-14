import a from "axios";
import { token } from "./api";

export const axios = a.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  },
  () => Promise.reject("Request failed")
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { statusCode, message } = error.response.data;

    if ([400, 403].includes(statusCode)) {
      return Promise.reject(message);
    }

    return Promise.reject("Request failed");
  }
);

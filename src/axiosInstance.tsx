import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { LoginResponse } from "models/user.model";
import { TOKEN_KEY } from "./authProvider";
export const API_URL = "http://localhost:3333/v1";
export const axiosInstance = axios.create({ baseURL: API_URL });
// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    const token = localStorage.getItem(TOKEN_KEY);
    console.log(token);
    if (config.headers) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error: AxiosError) {
    // Do something with request error
    return Promise.reject(error.response?.data);
  }
);

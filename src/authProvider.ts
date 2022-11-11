import { AuthProvider } from "@pankod/refine-core";
import { axiosInstance } from "axiosInstance";
import { LoginResponse, UserInfo } from "models/user.model";

export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    if (email && password) {
      const response = await axiosInstance.post<LoginResponse>("auth/sign-in", {
        email,
        password,
      });
      if (response.status === 200)
        localStorage.setItem(TOKEN_KEY, response.data.data.accessToken);
      return Promise.resolve();
    }
    return Promise.reject(new Error("username: admin, password: admin"));
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return Promise.resolve();
    }

    return Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
  getUserIdentity: async () => {
    const user_info = await axiosInstance.get<UserInfo>("auth/token");
    if (user_info.status === 401) {
      return Promise.reject();
    }
    return Promise.resolve({
      user: user_info.data.data,
    });
  },
};

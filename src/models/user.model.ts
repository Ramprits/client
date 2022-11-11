export type LoginResponse = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
};
export type UserInfo = {
  data: {
    id: number;
    email: string;
    roles: string[];
    avatar?: string;
  };
};

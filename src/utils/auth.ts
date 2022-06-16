import { User } from "../model/user.model";

export const doLogin = (user: User) => {
  const { name, password } = user;
  if (name === "Test" && password === "test") {
    return "token";
  }
};

export const doLogout = () => {
  sessionStorage.removeItem("token");
  return false;
};

export const setToken = (token: string) => {
  sessionStorage.setItem("_token", token);
};

export const getToken = () => {
  return sessionStorage.getItem("_token");
};

import { User } from "../model/user.model";

export const doLogin = (user: User) => {
  const { name, password } = user;
  if (name === "Test" && password === "test") {
    return "token";
  }
};

export const doLogout = () => {
  sessionStorage.clear();
  localStorage.clear();
  // return false;
};

export const setToken = (token: string) => {
  localStorage.setItem("_token", token);
};

export const getToken = () => {
  return localStorage.getItem("_token");
};

export const isLoggedIn = () => {
  if (getToken() === 'token') {
    return true;
  } else {
    return false;
  }
}

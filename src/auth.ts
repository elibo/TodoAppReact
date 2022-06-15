import { User } from "./model/user.model";

export const doLogin = (user: User) => {
  const { name, password } = user;
  if (name === "Test" && password === "test") {
    return "token";
  }
};

export const doLogout = () => {
  localStorage.removeItem("token");
};

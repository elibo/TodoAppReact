import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

export const PrivateRoute = ({ children }: { children: any }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

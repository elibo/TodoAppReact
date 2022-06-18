import { Navigate } from "react-router-dom";
import { getToken } from "../utils/auth";

const useAuth = () => {
  const token = getToken();
  return token;
};

export const PrivateRoute = ({ children }: { children: any }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/" />;
};

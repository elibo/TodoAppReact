import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage/Login";
import Main from "../pages/MainPage/Main";
import { PrivateRoute } from "./private";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/main"
        element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

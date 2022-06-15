import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import { PrivateRoute } from "./private";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
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

import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/LoginPage/Login";
import Main from "../pages/MainPage/Main";
import { useAppState } from "../appState";
import { doLogout } from "../utils/auth";
import { PrivateRoute } from "./private";


export const AppRoutes = () => {
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = useAppState([]);
  const navigate = useNavigate();

  const logout = () => {
    doLogout();
    navigate('/login');
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Main todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo} toggleTodo={toggleTodo} onLogout={logout} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

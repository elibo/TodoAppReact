import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/LoginPage/Login";
import Main from "../pages/MainPage/Main";
import { useAppState } from "../appState";
import { doLogout, doLogin, setToken } from "../utils/auth";
import { PrivateRoute } from "./private";
import { message } from "antd";


export const AppRoutes = () => {
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = useAppState([]);
  const navigate = useNavigate();

  const logout = () => {
    doLogout();
    navigate('/login');
  }

  const login = (user: any) => {
    const token = doLogin({ name: user.name, password: user.password });
    if (token) {
      setToken(token);
      navigate('/')
    } else {
      message.error("This user is not correct");
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={login} />} />
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

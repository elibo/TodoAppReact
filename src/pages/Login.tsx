import { useState } from "react";
import { Navigate } from "react-router-dom";
import { doLogin } from "../auth";

const Login = () => {
  const [token, setToken] = useState("");

  const login = () => {
    console.log("do login");
    const token = doLogin({ name: "Test", password: "test" });
    console.log(token);
    if (token) {
      setToken(token);
      localStorage.setItem("token", token);
    }
  };

  return (
    <>
      {!token ? (
        <div>
          This is the login page
          <button onClick={login}>login</button>
        </div>
      ) : (
        <Navigate to="/main" />
      )}
    </>
  );
};

export default Login;

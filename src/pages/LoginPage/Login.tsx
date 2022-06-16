import { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "../../components/button/button";
import { Card } from "antd";
import { doLogin, setToken } from "../../utils/auth";
import MyInput from "../../components/input/input";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => {
    const token = doLogin({ name: "Test", password: "test" });
    if (token) {
      setToken(token);
      setIsLogged(true);
    }
  };

  return (
    <>
      {!isLogged ? (
        <div className="login-wrapper">
          <Card
            className="login-card"
            title="Welcome to TODO APP"
            bordered={false}
            style={{ width: 300 }}
          >
            <MyInput placeholder="User" />
            <MyInput placeholder="Pass" isPass={true} />
          </Card>
          <Button label={"Login"} onClick={login} />
        </div>
      ) : (
        <Navigate to="/main" />
      )}
    </>
  );
};

export default Login;

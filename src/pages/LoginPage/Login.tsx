import { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "../../components/button/button";
import { Card, message } from "antd";
import { doLogin, setToken } from "../../utils/Auth/auth";
import MyInput from "../../components/input/input";

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ name: undefined, password: undefined });

  const login = () => {
    const token = doLogin({ name: user.name, password: user.password });
    if (token) {
      setToken(token);
      setIsLogged(true);
    } else {
      message.error("This user is not correct");
    }
  };

  const onNameChange = (event: any) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        name: event.target.value,
      };
    });
  };

  const onPasswordChange = (event: any) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        password: event.target.value,
      };
    });
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
            <MyInput
              placeholder="User"
              onChange={onNameChange}
              value={user.name!}
            />
            <MyInput
              placeholder="Pass"
              isPass={true}
              onChange={onPasswordChange}
              value={user.password!}
            />
          </Card>
          <Button
            disabled={!user.name || !user.password}
            label={"Login"}
            onClick={login}
          />
        </div>
      ) : (
        <Navigate to="/main" />
      )}
    </>
  );
};

export default Login;

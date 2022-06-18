import { useState } from "react";
import Button from "../../components/button/button";
import { Card, message } from "antd";
import { doLogin, setToken } from "../../utils/auth";
import MyInput from "../../components/input/input";

const Login = () => {
  const [user, setUser] = useState({ name: undefined, password: undefined });

  const login = () => {
    const token = doLogin({ name: user.name, password: user.password });
    if (token) {
      setToken(token);
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
  );
};

export default Login;

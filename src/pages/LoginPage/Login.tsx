import { useState } from "react";
import Button from "../../components/button/button";
import { Card } from "antd";
import MyInput from "../../components/input/input";

const Login = ({ onLogin }: any) => {
  const [user, setUser] = useState({ name: undefined, password: undefined });


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
        onClick={() => onLogin(user)}
      />
    </div>
  );
};

export default Login;

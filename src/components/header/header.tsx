import { useState } from "react";
import { Navigate } from "react-router-dom";
import { doLogout } from "../../utils/auth";
import { PageHeader } from "antd";
import MyButton from "../button/button";

const Header = () => {
  const [isLogged, setIsLogged] = useState(true);

  const logout = () => {
    setIsLogged(doLogout());
  };

  return (
    <>
      {isLogged ? (
        <PageHeader
          className="app-header"
          title="TODO APP"
          subTitle="Start adding things to your list"
        >
          <MyButton label="Exit" onClick={logout} />
        </PageHeader>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Header;

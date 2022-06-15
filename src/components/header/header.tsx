import { doLogout } from "../../auth";

const Header = () => {
  const logout = () => {
    doLogout();
  };

  return (
    <div>
      You are logged
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Header;

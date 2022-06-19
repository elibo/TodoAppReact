import { PageHeader } from "antd";
import MyButton from "../button/button";

const Header = ({ onLogout }: any) => {

  return (
    <PageHeader
      className="app-header"
      title="TODO APP"
      subTitle="Don't forget anything"
    >
      <MyButton label="Exit" onClick={onLogout} />
    </PageHeader>
  );
};

export default Header;

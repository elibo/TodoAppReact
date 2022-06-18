import { PageHeader } from "antd";
import MyButton from "../button/button";

const Header = ({ onLogout }: any) => {

  return (
    <PageHeader
      className="app-header"
      title="TODO APP"
      subTitle="Start adding things to your list"
    >
      <MyButton label="Exit" onClick={onLogout} />
    </PageHeader>
  );
};

export default Header;

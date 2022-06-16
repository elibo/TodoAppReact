import { Button } from "antd";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const MyButton = (props: ButtonProps) => {
  return (
    <Button type="primary" onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default MyButton;

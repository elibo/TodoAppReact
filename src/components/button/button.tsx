import { Button } from "antd";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const MyButton = (props: ButtonProps) => {
  return (
    <Button disabled={props.disabled} type="primary" onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default MyButton;

import { Input } from "antd";

interface InputProps {
  placeholder: string;
  isPass?: boolean;
}

const MyInput = (props: InputProps) => {
  return props.isPass ? (
    <Input.Password className="custom-input" placeholder={props.placeholder} />
  ) : (
    <Input className="custom-input" placeholder={props.placeholder} />
  );
};

export default MyInput;

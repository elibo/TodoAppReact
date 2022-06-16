import { Input } from "antd";

interface InputProps {
  placeholder: string;
  isPass?: boolean;
  onChange: (event: any) => void;
}

const MyInput = (props: InputProps) => {
  return props.isPass ? (
    <Input.Password
      className="custom-input"
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e)}
    />
  ) : (
    <Input
      className="custom-input"
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e)}
    />
  );
};

export default MyInput;

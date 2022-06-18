import { Input } from "antd";

interface InputProps {
  placeholder: string;
  value: string;
  isPass?: boolean;
  onChange: (event: any) => void;
}

const MyInput = (props: InputProps) => {
  return props.isPass ? (
    <Input.Password
      data-testid="pass-input"
      className="custom-input"
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e)}
    />
  ) : (
    <Input
      data-testid="input"
      className="custom-input"
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e)}
      value={props.value}
    />
  );
};

export default MyInput;

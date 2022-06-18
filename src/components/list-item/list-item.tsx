import { List } from "antd";
import MyButton from "../button/button";
import MyInput from "../input/input";

export interface ListItemProps {
  title: string;
  done: boolean;
  isEdit: boolean;
  onRemove: () => void;
  onDone: () => void;
  onUpdate: () => void;
}

const ListItem = (props: ListItemProps) => {
  return props.isEdit ? (
    <List.Item
      className="list-item"
      actions={[<MyButton label="Save" onClick={() => {}} />]}
    >
      <MyInput value={props.title} onChange={() => {}} placeholder="" />
    </List.Item>
  ) : (
    <List.Item
      className={`list-item ${props.done ? "done" : ""}`}
      actions={[
        <MyButton label="Done" onClick={props.onDone} />,
        <MyButton label="Remove" onClick={props.onRemove} />,
        <MyButton label="Update" onClick={props.onUpdate} />,
      ]}
    >
      <List.Item.Meta title={props.title} />
    </List.Item>
  );
};

export default ListItem;

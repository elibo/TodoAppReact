import { List } from "antd";
import MyButton from "../button/button";

export interface ListItemProps {
  title: string;
  done: boolean;
  onRemove: () => void;
  onDone: () => void;
}

const ListItem = (props: ListItemProps) => {
  return (
    <List.Item
      className={`list-item ${props.done ? "done" : ""}`}
      actions={[
        <MyButton label="Done" onClick={props.onDone} />,
        <MyButton label="Remove" onClick={props.onRemove} />,
      ]}
    >
      <List.Item.Meta title={props.title} />
    </List.Item>
  );
};

export default ListItem;

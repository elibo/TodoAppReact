import { List } from "antd";
import { ToDo } from "../../model/todo.model";
import ListItem from "../list-item/list-item";

interface ListProps {
  list: Array<ToDo>;
  onDone: (index: number) => void;
  onRemove: (index: number) => void;
}

const MyList = (props: ListProps) => {
  return (
    <List
      className="list"
      dataSource={props.list}
      renderItem={(item: ToDo, index: number) => (
        <ListItem
          title={item.title!}
          done={item.done!}
          onDone={() => props.onDone(index)}
          onRemove={() => props.onRemove(index)}
        />
      )}
    />
  );
};

export default MyList;

import { List } from "antd";
import { useState } from "react";
import EditItem from "../edit-item/edit-item";
import ListItem from "../list-item/list-item";

interface ListProps {
  list: Array<any>;
  onDone: (index: number) => void;
  onRemove: (index: number) => void;
  onUpdate: (newTodo: string, index: number) => void;
}

const MyList = (props: ListProps) => {
  const [isEdit, setEdit] = useState(-1);

  const onEdit = (index: number) => {
    setEdit(index)
  }

  const editTodo = (editedTodo: string) => {
    props.onUpdate(editedTodo, isEdit);
    setEdit(-1);
  }


  return (
    <List
      className="list"
      dataSource={props.list}
      renderItem={(item: any, index: number) => (
        isEdit === index ? <EditItem title={item.title!} onSave={editTodo} />
          :
          <ListItem
            title={item.title!}
            done={item.done!}
            onDone={() => props.onDone(index)}
            onRemove={() => props.onRemove(index)}
            onUpdate={() => onEdit(index)}
          />
      )
      }
    />
  );
};

export default MyList;

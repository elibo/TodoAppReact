import { useState } from "react";
import MyButton from "../../components/button/button";
import Header from "../../components/header/header";
import MyInput from "../../components/input/input";
import MyList from "../../components/list/list";
import { ToDo } from "../../model/todo.model";

const Main = () => {
  const [todo, setTodo] = useState<ToDo>({});
  const [todos, setTodos] = useState<Array<ToDo>>([]);
  const [isEdit, setEdit] = useState(false);

  const addTodo = () => {
    if (todo.title) {
      setTodos([...todos, todo]);
      setTodo({ title: "" });
    }
  };

  const onTodoDone = (index: number) => {
    const updateList = todos.map((item, i) => ({
      ...item,
      done: i === index ? !item.done : item.done,
    }));
    setTodos(updateList);
  };

  const onTodoUpdate = (index: number) => {
    setEdit(true);
  };

  const onTodoRemove = (index: number) => {
    const newList = todos.filter((_: any, i: number) => i !== index);
    setTodos(newList);
  };

  return (
    <div>
      <Header />
      <div className="list-wrapper">
        <div className="input-wrapper">
          <MyInput
            placeholder="Add a new todo"
            onChange={(e: any) => setTodo({ title: e.target.value })}
            value={todo.title!}
          />
          <MyButton label="Add" onClick={addTodo} />
        </div>
        <MyList
          list={todos}
          onDone={onTodoDone}
          onRemove={onTodoRemove}
          onUpdate={onTodoUpdate}
          isEdit={isEdit}
        />
      </div>
    </div>
  );
};

export default Main;

import { useState } from "react";
import MyButton from "../../components/button/button";
import Header from "../../components/header/header";
import MyInput from "../../components/input/input";
import MyList from "../../components/list/list";
import { ToDo } from "../../model/todo.model";

const Main = () => {
  const [todo, setTodo] = useState<ToDo>({});
  const [todos, setTodos] = useState<Array<ToDo>>([]);

  const onInputChange = (e: any) => {
    setTodo({ title: e.target.value, done: false });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
  };

  const onTodoDone = (index: number) => {
    console.log(index);
  };

  const onTodoRemove = (index: number) => {
    console.log(index);
  };

  return (
    <div>
      <Header />
      <div className="list-wrapper">
        <div className="input-wrapper">
          <MyInput placeholder="Add a new todo" onChange={onInputChange} />
          <MyButton label="Add" onClick={addTodo} />
        </div>
        <MyList list={todos} onDone={onTodoDone} onRemove={onTodoRemove} />
      </div>
    </div>
  );
};

export default Main;

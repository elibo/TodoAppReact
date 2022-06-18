import { useState } from "react";
import MyButton from "../../components/button/button";
import Header from "../../components/header/header";
import MyInput from "../../components/input/input";
import MyList from "../../components/list/list";

const Main = ({ todos, addTodo, editTodo, deleteTodo, toggleTodo, onLogout }: any) => {
  const [todo, setTodo] = useState<any>({});

  const newTodo = () => {
    if (todo.title) {
      addTodo(todo);
      setTodo({ title: "" });
    }
  };

  return (
    <div data-testid="main-page">
      <Header onLogout={onLogout} />
      <div className="list-wrapper">
        <div className="input-wrapper">
          <MyInput
            placeholder="Add a new todo"
            onChange={(e: any) => setTodo({ title: e.target.value })}
            value={todo.title!}
          />
          <MyButton label="Add" onClick={newTodo} />
        </div>
        <MyList
          list={todos}
          onDone={toggleTodo}
          onRemove={deleteTodo}
          onUpdate={editTodo}
        />
      </div>
    </div>
  );
};

export default Main;

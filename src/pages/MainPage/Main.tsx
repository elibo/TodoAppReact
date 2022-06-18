import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/button/button";
import Header from "../../components/header/header";
import MyInput from "../../components/input/input";
import MyList from "../../components/list/list";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { doLogout } from "../../utils/auth";

const Main = () => {
  const [todo, setTodo] = useState<any>({});
  const [todos, setTodos] = useLocalStorage('todos', []);
  let navigate = useNavigate();

  const addTodo = () => {
    if (todo.title) {
      setTodos([...todos, todo]);
      setTodo({ title: "" });
    }
  };

  const logout = () => {
    doLogout();
    navigate('/', { replace: true });
  }

  const onTodoDone = (index: number) => {
    const updateList = todos.map((item: any, i: number) => ({
      ...item,
      done: i === index ? !item.done : item.done,
    }));
    setTodos(updateList);
  };

  const onTodoRemove = (index: number) => {
    const newList = todos.filter((_: any, i: number) => i !== index);
    setTodos(newList);
  };

  const onTodoEdited = (edited: string, index: number) => {
    const updateList = todos.map((item: any, i: number) => ({
      ...item,
      title: i === index ? edited : item.title,
    }));
    setTodos(updateList);
  }

  return (
    <div data-testid="main-page">
      <Header onLogout={logout} />
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
          onUpdate={onTodoEdited}
        />
      </div>
    </div>
  );
};

export default Main;

import { useState } from "react";
import { ToDo } from "../../model/todo.model";

export default (initialValue: any) => {
  const [todos, setTodos] = useState(initialValue);
  const [selectedTodo, setSelectedTodo] = useState(initialValue);

  return {
    todos,
    selectedTodo,
    addTodo: (todo: ToDo) => {
      setTodos([...todos, todo]);
    },
    selectTodo: (index: number) => {
      const selected = todos.findIndex(index);
      setSelectedTodo(selected);
    },
    updateTodo: (todo: ToDo) => {},
    deleteCategory: (index: number) => {
      const newList = todos.filter((_: any, i: number) => i !== index);
      setTodos(newList);
    },
  };
};

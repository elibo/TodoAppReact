import { useLocalStorage } from './hooks/useLocalStorage';

export const useAppState = (initialValue: any) => {
    const [todos, setTodos] = useLocalStorage('todos', []);

    return {
        todos,
        addTodo: (todo: any) => {
            setTodos([...todos, todo]);
        },
        editTodo: (edited: string, index: number) => {
            const updateList = todos.map((item: any, i: number) => ({
                ...item,
                title: i === index ? edited : item.title,
            }));
            setTodos(updateList);
        },
        toggleTodo: (index: number) => {
            const updateList = todos.map((item: any, i: number) => ({
                ...item,
                done: i === index ? !item.done : item.done,
            }));
            setTodos(updateList);
        },
        deleteTodo: (index: number) => {
            const newList = todos.filter((_: any, i: number) => i !== index);
            setTodos(newList);
        }
    };
};
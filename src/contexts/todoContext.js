import { createContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const set = (fetched) => setTodos(fetched);

  const addOne = (newTodo) => setTodos([...todos, newTodo]);

  const updateOne = (updated) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === updated.id) return updated;
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteOne = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{ list: todos, set, addOne, updateOne, deleteOne }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

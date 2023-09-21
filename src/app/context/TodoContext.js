import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext(null);

function TodoContextProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const {
    items: todos,
    saveItems: saveTodos,
    completeItem: completeTodo,
    deleteItem: deleteTodo,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const searchedTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completedTodos = searchedTodos.filter(
    (todo) => !!todo.completed
  ).length;

  const totalTodos = searchedTodos.length;

  return (
    <TodoContext.Provider
      value={{
        todos,
        deleteTodo,
        completeTodo,
        loading,
        error,
        searchedTodos,
        totalTodos,
        completedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };

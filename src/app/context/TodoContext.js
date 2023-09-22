import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useModal } from "../hooks/useModal";

const TodoContext = createContext(null);

function TodoContextProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const {
    items: todos,
    saveItems: saveTodos,
    completeItem: completeTodo,
    deleteItem: deleteTodo,
    createItem: createTodo,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const { isShowingModal, toggle } = useModal();

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
        isShowingModal,
        toggle,
        createTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };

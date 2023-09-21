"use client";
import { CreateTodoButton } from "@/app/components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "@/app/components/TodoItem/TodoItem";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { TodoSearch } from "@/app/components/TodoSearch/TodoSearch";
import { TodoTitle } from "@/app/components/TodoTitle/TodoTitle";
import { TodoContext } from "@/app/context/TodoContext";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { Error } from "@/app/states/Error/Error";
import { Loading } from "@/app/states/Loading/Loading";
import React, { createContext, useState } from "react";

function TodosPage() {
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
        completeTodo,
        deleteTodo,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
      }}
    >
      <TodoTitle />
      <TodoSearch />
      {completedTodos === totalTodos && totalTodos !== 0 && !error && (
        <p className="text-xl font-medium mb-2">Todos are completed</p>
      )}
      {!loading && totalTodos && !error === 0 && (
        <p className="font-medium text-xl mb-2">Start creating todos</p>
      )}
      {error && <Error />}
      <TodoList>
        {loading ? (
          <Loading />
        ) : (
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.title}
              text={todo.text}
              title={todo.title}
              completed={todo.completed}
            />
          ))
        )}
      </TodoList>
      <CreateTodoButton />
    </TodoContext.Provider>
  );
}

export { TodosPage };

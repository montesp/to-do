"use client";
import { CreateTodoButton } from "@/app/components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "@/app/components/TodoItem/TodoItem";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { TodoSearch } from "@/app/components/TodoSearch/TodoSearch";
import { TodoTitle } from "@/app/components/TodoTitle/TodoTitle";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import React, { useState } from "react";

function TodosPage() {
  const [searchValue, setSearchValue] = useState("");
  const [parsedTodos, todos, saveTodos, completeTodo, deleteTodo] =
    useLocalStorage("TODOS_V1", []);
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
    <>
      <TodoTitle completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {completedTodos === totalTodos && totalTodos !== 0 && (
        <p className="text-center text-2xl font-bold mb-2">
          Todos are completed
        </p>
      )}

      {totalTodos === 0 && (
        <p className="text-center font-bold text-2xl mb-2">
          Start creating todos
        </p>
      )}

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.title}
            text={todo.text}
            title={todo.title}
            completed={todo.completed}
            onCompleted={completeTodo}
            onDeleted={deleteTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { TodosPage };

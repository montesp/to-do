"use client";
import { CreateTodoButton } from "@/app/components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "@/app/components/TodoItem/TodoItem";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { TodoSearch } from "@/app/components/TodoSearch/TodoSearch";
import { TodoTitle } from "@/app/components/TodoTitle/TodoTitle";
import { TodoContext } from "@/app/context/TodoContext";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { Empty } from "@/app/states/Empty/Empty";
import { Error } from "@/app/states/Error/Error";
import { createPortal } from "react-dom";
import { Loading } from "@/app/states/Loading/Loading";
import React, { createContext, useContext, useState } from "react";
import { CreateTodoModal } from "@/app/components/CreateTodoModal/CreateTodoModal";

function TodosPage() {
  const { totalTodos, error, loading, searchedTodos, isShowing } =
    useContext(TodoContext);
  return (
    <>
      <TodoTitle />
      <TodoSearch />
      <TodoList>
        {!loading && totalTodos <= 0 && !error && <Empty />}
        {error && <Error />}
        {loading && <Loading />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.title}
            text={todo.text}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />

      {isShowing && createPortal(<CreateTodoModal />, document.body)}
    </>
  );
}

export { TodosPage };

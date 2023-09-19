"use client";
import { CreateTodoButton } from "@/app/components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "@/app/components/TodoItem/TodoItem";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { TodoSearch } from "@/app/components/TodoSearch/TodoSearch";
import { TodoTitle } from "@/app/components/TodoTitle/TodoTitle";
import React, { useState } from "react";

const defaultTodos = [
  { title: "Cooking", text: "Cook dinner", completed: true },
  { title: "Study", text: "Complete react courses", completed: true },
  { title: "Buy", text: "Buy furniture for kitchen", completed: false },
  { title: "Eat", text: "Eat healtly", completed: false },
  { title: "title", text: "Study", completed: true },
];

function TodosPage() {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
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
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            todos={todos}
            setTodos={setTodos}
            key={todo.title}
            text={todo.text}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { TodosPage };

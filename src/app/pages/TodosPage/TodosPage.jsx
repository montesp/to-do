import { CreateTodoButton } from "@/app/components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "@/app/components/TodoItem/TodoItem";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { TodoSearch } from "@/app/components/TodoSearch/TodoSearch";
import { TodoTitle } from "@/app/components/TodoTitle/TodoTitle";
import React from "react";

const defaultTodos = [
  { title: "Cooking", text: "Cook dinner", completed: true },
  { title: "title", text: "Study", completed: false },
  { title: "title", text: "Destroy furniture", completed: true },
  { title: "title", text: "Eat", completed: false },
];

function TodosPage() {
  return (
    <>
      <TodoTitle completed={2} total={3} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
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

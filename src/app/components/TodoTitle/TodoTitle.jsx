import { TodoContext } from "@/app/context/TodoContext";
import React, { useContext } from "react";

function TodoTitle() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h1 className="font-sans text-2xl mb-3">
      You have completed <span className="font-semibold">{completedTodos}</span>{" "}
      of <span className="font-semibold">{totalTodos}</span> Todos
    </h1>
  );
}

export { TodoTitle };

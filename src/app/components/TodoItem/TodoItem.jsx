"use client";
import { TodoContext } from "@/app/context/TodoContext";
import React, { useContext, useState } from "react";
import { FaX, FaCheck } from "react-icons/fa6";

function TodoItem({ text, title, completed }) {
  const { completeTodo, deleteTodo } = useContext(TodoContext);
  return (
    <li className="relative flex w-100 h-28 px-4 py-4 rounded-lg bg-card">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => completeTodo(title)}
        className={`w-5 h-5 mt-2 rounded-3xl hover:text-green-600 cursor-pointer`}
      ></input>
      <div className="flex flex-col pl-2">
        <h3 className={`text-2xl font-bold ${completed ? "line-through" : ""}`}>
          {title}
        </h3>
        <p
          className={`text-base font-normal ${completed ? "line-through" : ""}`}
        >
          {text}
        </p>
      </div>
      <FaX
        onClick={() => deleteTodo(title)}
        className="absolute right-4 top-4 w-4 h-4 font-bold  hover:text-red-500"
      />
    </li>
  );
}

export { TodoItem };

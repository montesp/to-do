"use client";
import { TodoContext } from "@/app/context/TodoContext";
import { useModal } from "@/app/hooks/useModal";
import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";

function CreateTodoButton() {
  const { toggle } = useContext(TodoContext);

  return (
    <button
      onClick={() => toggle()}
      className="fixed flex justify-center items-center bottom-4 right-4 rounded-full text-3xl w-10 h-10 bg-blue-400 text-zinc-950 z-20"
    >
      <FaPlus className="w-6 h-6" />
    </button>
  );
}

export { CreateTodoButton };

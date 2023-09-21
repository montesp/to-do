"use client";
import { TodoContext } from "@/app/context/TodoContext";
import React, { useContext, useState } from "react";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const changeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      onChange={(e) => changeSearch(e)}
      value={searchValue}
      className="border-2 rounded-lg text-black  outline-0 pl-2 py-2 mb-3 min-w-[50%]"
      placeholder="Create todo..."
    />
  );
}

export { TodoSearch };

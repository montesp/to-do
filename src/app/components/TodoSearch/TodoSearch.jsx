"use client";
import React, { useState } from "react";

function TodoSearch() {
  const [searchValue, setSearchValue] = useState("");

  const changeSearch = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <input
      onChange={(e) => changeSearch(e)}
      className="border-2 rounded-lg text-black  outline-0 pl-2 py-2 mb-3 min-w-[50%]"
      placeholder="Crear todo..."
    />
  );
}

export { TodoSearch };

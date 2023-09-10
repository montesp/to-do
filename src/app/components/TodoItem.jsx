import React from "react"

function TodoItem({text, completed}){
  return (
    <li className="flex items-center justify-center w-100 h-16 p-2 border-2 border-blue-200 rounded-lg ">
      <span>V</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  )
}

export { TodoItem }

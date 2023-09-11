import React from "react"
import { FaX, FaCheck } from 'react-icons/fa6'

function TodoItem({text, title, completed}){
  return (
    <li className="relative flex w-100 h-28 px-4 py-4 rounded-lg bg-card">
      <input type="checkbox" className="w-5 h-5 mt-2 rounded-3xl hover:text-green-600 "></input>
      <div className="flex flex-col pl-2">
        {/* <FaCheck className="w-4 h-4 mr-2 hover:text-green-600 "/> */}
        <h3 className=" text-lg font-bold">{title}</h3>
        <p className="text-xs font-normal">{text}</p>
      </div>
      <FaX className="absolute right-4 top-4 w-4 h-4 font-bold  hover:text-red-500"/>
    </li>
  )
}

export { TodoItem }

import React from "react"
import { FaPlus } from "react-icons/fa6"

function CreateTodoButton(){
  return (
    <button
      className="fixed flex justify-center items-center bottom-4 right-4 rounded-full text-3xl w-10 h-10 bg-blue-400 text-zinc-950">
        <FaPlus className="w-6 h-6"/>
    </button>
  )
}

export { CreateTodoButton }

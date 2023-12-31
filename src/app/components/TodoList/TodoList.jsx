import React from "react"

function TodoList({children}){
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {children}
    </ul>
  )
}

export { TodoList }

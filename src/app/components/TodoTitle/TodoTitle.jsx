import React from "react"

function TodoTitle({ completed, total}){
  return (
    <h1 className="font-sans text-2xl mb-3">
      Has completado <span className="font-semibold">{completed}</span> de <span className="font-semibold">{total}</span> Todos
    </h1>
  )
}

export { TodoTitle }
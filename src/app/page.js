import { CreateTodoButton } from "./components/CreateTodoButton"
import { TodoItem } from "./components/TodoItem"
import { TodoList } from "./components/TodoList"
import { TodoSearch } from "./components/TodoSearch"
import { TodoTitle } from "./components/TodoTitle"


const defaultTodos = [
  { title:'Cooking', text: 'Cook dinner', completed: true },
  { title:'title', text: 'Study', completed: false },
  { title:'title', text: 'Destroy furniture', completed: true },
  { title:'title', text: 'Eat', completed: false },
]

export default function Home() {
  return (
    <div className="flex flex-col h-full w-10/12 m-auto my-4">
       <TodoTitle
        completed={2}
        total={3}
      />
      <TodoSearch/>
      <TodoList>
        { defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            title={todo.title}
            completed={todo.completed }
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </div>
  )
}

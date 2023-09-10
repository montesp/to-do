import { CreateTodoButton } from "./components/CreateTodoButton"
import { TodoItem } from "./components/TodoItem"
import { TodoList } from "./components/TodoList"
import { TodoSearch } from "./components/TodoSearch"
import { TodoTitle } from "./components/TodoTitle"


const defaultTodos = [
  { text: 'Cook dinner', completed: true },
  { text: 'Study', completed: false },
  { text: 'Destroy furniture', completed: true },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },
  { text: 'Eat', completed: false },


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
            completed={todo.completed }
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </div>
  )
}

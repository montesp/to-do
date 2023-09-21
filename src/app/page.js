import { TodosPage } from "./pages/TodosPage/TodosPage";

// const defaultTodos = [
//   { title: "Cooking", text: "Cook dinner", completed: true },
//   { title: "title", text: "Study", completed: false },
//   { title: "title", text: "Destroy furniture", completed: true },
//   { title: "title", text: "Eat", completed: false },
// ];

export default function Home() {
  return (
    <div className="flex flex-col h-full w-10/12 m-auto my-4">
      <TodosPage />
    </div>
  );
}

"use client";
import { TodoContextProvider } from "./context/TodoContext";
import { TodosPage } from "./pages/TodosPage/TodosPage";

export default function Home() {
  return (
    <TodoContextProvider>
      <div className="flex flex-col h-full w-10/12 m-auto my-4">
        <TodosPage />
      </div>
    </TodoContextProvider>
  );
}

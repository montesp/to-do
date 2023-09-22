import { TodoContext } from "@/app/context/TodoContext";
import { useContext, useState } from "react";
import { FaX } from "react-icons/fa6";

function CreateTodoModal() {
  const { toggle, createTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const [error, setError] = useState(false);

  const getTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const getDescription = (e) => {
    const description = e.target.value;
    setNewDescription(description);
  };

  const createNewTodo = () => {
    if (title !== "" && description !== "") {
      createTodo(title, description);
      toggle();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed top-0 right-0 w-full h-full flex justify-center items-center z-10 bg-black bg-opacity-60">
      <div className="relative flex flex-col bg-white  w-11/12 md:w-3/5 lg:w-2/5 xl:w-2/5 px-8 py-4 rounded-xl  ">
        <button>
          x
          <FaX className="absolute right-4 top-4 w-4 h-4 font-bold  hover:text-red-500" />
        </button>
        <h2 className="text-black text-center font-medium text-2xl mb-2">
          Create a todo
        </h2>
        <input
          onChange={(e) => getTitle(e)}
          className="text-black border-black border-2 p-2 rounded-lg mb-2"
          placeholder="Title"
        ></input>
        <textarea
          onChange={(e) => getDescription(e)}
          className="text-black border-black border-2 p-2 rounded-lg"
          placeholder="Create a todo"
        ></textarea>
        {error && (
          <p className="text-red-500 text-center">Please fill all the fields</p>
        )}
        <div className="flex justify-around my-4 w-4/5 mx-auto ">
          <button
            onClick={() => createNewTodo()}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Create
          </button>
          <button
            onClick={() => toggle()}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export { CreateTodoModal };

import { useEffect, useState } from "react";
// const defaultTodos = [
//   { title: "Cooking", text: "Cook dinner", completed: true },
//   { title: "Study", text: "Complete react courses", completed: true },
//   { title: "Buy", text: "Buy furniture for kitchen", completed: false },
//   { title: "Eat", text: "Eat healtly", completed: false },
//   { title: "title", text: "Study", completed: true },
// ];

function useLocalStorage(itemName, initialValue) {
  // localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localItems = localStorage.getItem(itemName);
        let parsedItem;
        if (!localItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = localStorage.getItem(itemName);
        } else {
          parsedItem = JSON.parse(localItems);
        }

        setItems(parsedItem);
      } catch (error) {
        setLoading(false);
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 2000);
  }, []);

  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem);
  };

  const completeItem = (title) => {
    const newItems = items.map((item) => {
      if (item.title === title) {
        item.completed = !item.completed;
      }
      return item;
    });
    saveItems(newItems);
  };

  const deleteItem = (title) => {
    const newItems = items.filter((item) => item.title !== title);
    saveItems(newItems);
  };

  return { items, saveItems, completeItem, deleteItem, loading, error };
}

export { useLocalStorage };

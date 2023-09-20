import { useState } from "react";
const defaultTodos = [
  { title: "Cooking", text: "Cook dinner", completed: true },
  { title: "Study", text: "Complete react courses", completed: true },
  { title: "Buy", text: "Buy furniture for kitchen", completed: false },
  { title: "Eat", text: "Eat healtly", completed: false },
  { title: "title", text: "Study", completed: true },
];

function useLocalStorage(itemName, initialValue) {
  let localItems = localStorage.getItem(itemName);
  if (!localItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    localItems = localStorage.getItem(itemName);
  }
  const parsedItem = JSON.parse(localItems);
  const [items, setItems] = useState(parsedItem);

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

  return [parsedItem, items, saveItems, completeItem, deleteItem];
}

export { useLocalStorage };

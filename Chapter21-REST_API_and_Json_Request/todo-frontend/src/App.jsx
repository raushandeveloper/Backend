import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState, useEffect } from "react";
import {
  addItemToServer,
  getAllItemsFromServer,
  deleteItemFromServer,
  markItemCompletedOnServer,
} from "./services/itemsService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const fetchTodoItems = async () => {
      const items = await getAllItemsFromServer();
      setTodoItems(items);
    };
    fetchTodoItems();
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const Item = await addItemToServer(itemName, itemDueDate);
    const newTodoItems = [...todoItems, Item];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItemFromServer(id);
      const newTodoItems = todoItems.filter((item) => item.id !== id);
      setTodoItems(newTodoItems);
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleCompletedChange = async (id, completed) => {
    try {
      const updatedItem = await markItemCompletedOnServer(id, completed);
      const newTodoItems = todoItems.map((item) =>
        item.id === id ? updatedItem : item
      );
      setTodoItems(newTodoItems);
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
        onCompletedChange={handleCompletedChange}
      ></TodoItems>
    </center>
  );
}

export default App;
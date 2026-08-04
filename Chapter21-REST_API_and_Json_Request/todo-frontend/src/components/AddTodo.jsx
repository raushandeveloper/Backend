import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      <div className="flex flex-col sm:flex-row items-center gap-3 my-3 px-2">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={todoName}
          onChange={handleNameChange}
          className="w-full sm:flex-[3] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="date"
          value={dueDate}
          onChange={handleDateChange}
          className="w-full sm:flex-[2] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="button"
          onClick={handleAddButtonClicked}
          className="w-full sm:w-auto min-w-[80px] bg-green-600 hover:bg-green-700 text-white font-medium rounded-md px-4 py-2 transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
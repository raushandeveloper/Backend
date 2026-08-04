import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onCompletedChange }) => {
  const sortedItems = [...todoItems].sort((a, b) => {
    return (a.completed === b.completed) ? 0 : a.completed ? 1 : -1;
  });

  return (
    <div className="text-left w-full">
      {sortedItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoDate={item.dueDate}
          todoName={item.name}
          completed={item.completed}
          onDeleteClick={onDeleteClick}
          onCompletedChange={onCompletedChange}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
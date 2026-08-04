function TodoItem({ id, todoName, todoDate, completed, onDeleteClick, onCompletedChange }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-3 my-2 px-2 py-2 bg-white rounded-md shadow-sm">
        <div className="flex-shrink-0">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => onCompletedChange(id, e.target.checked)}
            className="w-5 h-5 accent-green-600 cursor-pointer"
          />
        </div>
        <div
          className={`flex-[3] text-left truncate ${
            completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todoName}
        </div>
        <div className="flex-[2] text-left text-gray-600">{todoDate}</div>
        <div className="flex-shrink-0">
          <button
            type="button"
            onClick={() => onDeleteClick(id)}
            className="min-w-[80px] bg-red-600 hover:bg-red-700 text-white font-medium rounded-md px-3 py-2 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
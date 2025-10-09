import "./TodoList.css";

function TodoList({ tasks, deleteTask }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet </p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => deleteTask(index)}>🗑️</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;

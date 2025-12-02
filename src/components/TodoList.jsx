import "./TodoList.css";

function TodoList({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet </p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className={task.completed ? "completed" : ""}>
                {task.text}
              </span>

              <div className="btn-group">
                <button className="done-btn" onClick={() => toggleTask(index)}>
                  ✔
                </button>

                <button className="delete-btn" onClick={() => deleteTask(index)}>
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;

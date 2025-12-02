import { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    
    
    updated[index].completed = !updated[index].completed;
 
    setTasks(updated);
  };

  return (
    <div className="app-container">
    
      <h1> To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;

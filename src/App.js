import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (task) => {
    setTodoList(todoList.filter((item) => item !== task));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div className="task-btn-container">
              <h1>{task}</h1>
              <button className="btn" onClick={() => deleteTask(task)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

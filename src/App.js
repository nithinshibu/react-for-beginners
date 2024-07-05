import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, //grabing the id of the last element and adding +1 to it
      taskName: newTask,
      isCompleted: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const markAsCompleted = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
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
            <Task
              taskName={task.taskName}
              id={task.id}
              isCompleted={task.isCompleted}
              deleteTask={deleteTask}
              markAsCompleted={markAsCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

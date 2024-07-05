export const Task = (props) => {
  return (
    <div className="task-btn-container">
      <h1 style={{ color: props.isCompleted ? "green" : "black" }}>
        {props.taskName}
      </h1>
      <button className="ml-15" onClick={() => props.markAsCompleted(props.id)}>
        Completed
      </button>
      <button className="btn" onClick={() => props.deleteTask(props.id)}>
        X
      </button>
    </div>
  );
};

// export default Task;

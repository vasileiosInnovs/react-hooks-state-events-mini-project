import React from "react";

function Task({category, taskKey, text, deleteTask }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => deleteTask(taskKey)}>X</button>
    </div>
  );
}

export default Task;

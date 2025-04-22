import React from "react";
import Task from "./Task"

function TaskList({ deleteTask, tasks }) {
  return (
    <div>
    <ul>
    {tasks.map(task => (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        taskKey={task.text}
        deleteTask={deleteTask}
      />
    ))}
  </ul>
  </div>
  );
}

export default TaskList;
 
// == Import npm
import React from 'react';

// == Import
import Task from './Task';
import './tasks.scss';

// == Composant
const Tasks = ({ tasksList, updateTaskStatus, deleteTask }) => (
  <ul className="tasks_container">
    {tasksList.map((task) => (
      <Task
        {...task}
        key={task.id}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    ))}
  </ul>
);

// == Export
export default Tasks;

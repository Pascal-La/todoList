import React from 'react';

import classNames from 'classnames';

const Tasks = ({
  id,
  label,
  done,
  updateTaskStatus,
  deleteTask,
}) => {
  const idTask = `checkbox-${id}`;

  const cssClass = classNames(
    'task_single-task',
    { 'task_single-task--done': done },
  );

  return (
    <li className={cssClass}>
      <label className="label" htmlFor={idTask}>
        <input
          type="checkbox"
          className="checkbox"
          id={idTask}
          checked={done}
          onChange={(event) => {
            updateTaskStatus(event.currentTarget.checked, id);
          }}
        />
        {label}
      </label>
      <button
        type="button"
        id={idTask}
        onClick={() => {
          deleteTask(id);
        }}
      >
        Supprimer
      </button>
    </li>
  );
};

// == Export
export default Tasks;

// == Import npm
import React, { useState, useEffect } from 'react';

import Form from '../Form';
import Tasks from '../Tasks';

import initialTasks from '../data/tasks';

// == Import
import './styles.scss';

// == Composant
const TodoList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskLabel, setTaskLabel] = useState('');
  const [taskStatus, setTaskStatus] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTasks(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(tasks);
    localStorage.setItem('todos', json);
  }, [tasks, taskStatus]);

  const addTask = () => {
    const idTab = tasks.map((item) => item.id);
    const idMax = Math.max(...idTab);
    const newTask = {
      id: idMax + 1,
      label: taskLabel,
      done: false,
    };
    const newArrayTasks = [...tasks];
    newArrayTasks.push(newTask);
    setTasks(newArrayTasks);
    setTaskLabel('');
  };

  const updateTaskLabel = (newValue) => {
    setTaskLabel(newValue);
  };

  const updateTaskStatus = (newValue, idTask) => {
    const updatedStatus = [...tasks].map((task) => {
      if (task.id === idTask) {
        task.done = !task.done;
      }
      return task;
    });
    setTaskStatus(updatedStatus);
  };

  const deleteTask = (idTask) => {
    console.log('clic deleteTasks');
    const updateTaskList = [...tasks].filter((task) => task.id !== idTask);
    setTasks(updateTaskList);
  };

  return (
    <div className="app_container">
      <Form
        manageSubmit={addTask}
        value={taskLabel}
        setValue={updateTaskLabel}
      />
      <Tasks
        tasksList={tasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    </div>
  );
};

// == Export
export default TodoList;

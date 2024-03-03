// src/components/ToDoList.jsx
import React, { useState } from 'react';
import { useTasks } from '../contexts/TaskContext';

const ToDoList = () => {
  const { tasks, setTasks } = useTasks();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
   

    <div className="container mx-auto py-8">
  <div className="max-w-md mx-auto bg-white rounded-md p-4 shadow-md">
    <h2 className="text-lg font-bold mb-4">To-Do List</h2>
    <div className="flex flex-col md:flex-row mb-4">
      <input
        type="text"
        className="flex-grow mb-2 md:mr-2 md:mb-0 border-b-2 border-gray-300 focus:outline-none px-4 py-2"
        placeholder="Add a task..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
    <ul>
      {tasks.map(task => (
        <li key={task.id} className="flex items-center justify-between mb-2">
          <label className={`inline-flex items-center cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span className="ml-2">{task.text}</span>
          </label>
          <button
            className="text-red-500 hover:text-red-700 focus:outline-none"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>


  );
};

export default ToDoList;

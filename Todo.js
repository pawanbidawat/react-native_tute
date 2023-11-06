import React, { useState } from 'react';
import './index.css';


const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [taskList, setTaskList] = useState([]);

   

       const handleAddTask = () => {
        setTaskList([...taskList, inputValue]);
        setInputValue('');
       };

       const handleDeleteTask = (index) => {
        let updatedTasks = [...taskList];
        console.log(updatedTasks);
        updatedTasks.splice(index,2 );
        console.log(index);
        setTaskList(updatedTasks);
       };

return (
 <div className="App">
    <h1 >Todo App</h1>
    <center>
    <input 
      type="text" 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)} 
      className='input'
    />
  
    <button onClick={handleAddTask}>Add Task</button>
    <ul>
      {taskList.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => handleDeleteTask(index)}>Delete {index}
          </button>
        </li>
      ))}
    </ul>
    </center>
 </div>
);
};

export default Todo;
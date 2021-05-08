import React, { useState } from 'react';
import { Form } from './Components/Forms';
import { List } from './Components/List';
import './styles.css';




export default function App() {
  const [tasks, setTask] = useState([]);

  const addTask = task => {

  const newTask = {
      task: task,
      isComplete: true
  
    }

    setTask([...tasks, newTask]);
  }
  
  const deleteTask = index => {
    let newTasks = [...tasks]
    newTasks.splice(index, 1)

    setTask(newTasks);
  }

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isComplete = !newTasks[index].isComplete;
    setTask(newTasks)
  }

  return (
    
    <div className="app">
    <Form onSave={addTask}/>
    <List  
    tasks={tasks}
    deleteTask={deleteTask}
    completeTask={completeTask}
    />
    </div>
    
  );
}




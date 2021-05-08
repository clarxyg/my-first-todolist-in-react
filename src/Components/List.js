import React from 'react';

export function List(props) {
    const { tasks } = props;
    
  
    return (
  
    <div className="task-list">
        {tasks.map((task, index) => {
          return(
             <div  
             className="task-card" key={index}
             >
              <span
              className={task.isComplete ? "complete" : ""}
              >{task.task}</span>
               <div className="actions">
              <button 
              className="button1 -complete" 
              onClick={() => props.completeTask(index)}>
              {task.isComplete ? "Concluído" : "Faz ae 🥺"}
              </button>
              <button 
              onClick={() => props.deleteTask(index)}
              className="button1 -delete">Excluir</button>
               </div>
             </div> 
          )
        })}
        
    </div>
  
   
    )
  }
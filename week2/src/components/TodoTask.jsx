import React from 'react'
import Card from './Card'

const TodoTask = ({taskList,deleteTask}) => {
  return (
    <div>
      <h1>Just one more episode</h1>
      {taskList.length===0 && <h4>No task!</h4>}
     <div className='grid h-56 grid-cols-3 content-start gap-4 '>
         {taskList.length>0 && 
      
    taskList.map((task,index)=>(
            <Card
            key={index}
            title={task.title}
            description={task.description}
            deleteTask={()=>deleteTask(index)}
            />
    ))
    
      
      }
     </div>
    </div>
  )
}

export default TodoTask

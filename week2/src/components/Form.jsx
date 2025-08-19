import React, { useState } from 'react'
import Button from './Button'
import TodoTask from './TodoTask'

const Form = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [taskList, setTaskList] = useState([])
     


    const addButton = (event)=>{
         event.preventDefault();

         if (!title && !description) {
            return alert('Add Title & Description ')
         }
        
        const todoTask={
            title: title,
            description: description
         }

         setTaskList([...taskList,todoTask])

        setTitle("")
        setDescription("")
    }
   const deleteTask = (indexToDelete) => {
setTaskList(taskList.filter((_, index) => index !== indexToDelete));
};
  return (
    <>
   <div className="bg-gray-100 m-4 p-6 rounded-sm shadow-lg">
     <form className='flex flex-col' action="" onSubmit={addButton}>
       <div className='flex flex-col mb-2'>
         <label className='font-bold text-xl mb-2' htmlFor="title">Title</label>
        <input value={title} type="text" className='border p-2 rounded-sm' onChange={(e)=>{setTitle(e.target.value)}}/>
       </div>
        <div className='flex flex-col mb-2'>
            <label className='font-bold text-xl mb-2' htmlFor="description">Description</label>
        <textarea name="description" value={description} className='border p-2 rounded-sm' id="" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        </div>
        <Button name={"Add"} handleClick={addButton} color="green"/>
    </form>
    </div>
<TodoTask taskList={taskList} deleteTask={deleteTask}/>
   </>
  )
}

export default Form

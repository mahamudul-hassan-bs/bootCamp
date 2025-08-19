import React from 'react'
import Button from './Button'

const Card = ({title, description,deleteTask}) => {
    
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
  <div className='flex justify-between'>
      <div className="font-bold text-xl mb-2">{title}</div>
   <div className='text-red-500'>
     <Button name={"Delete"} onClick={deleteTask} color={"red"}/>
   </div>
  </div>
    <p className="text-gray-700 text-base">
        {description}
     </p>
  </div>
</div>
  )
}

export default Card

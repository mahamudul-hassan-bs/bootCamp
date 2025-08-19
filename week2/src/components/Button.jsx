import React from 'react'

const Button = ({name, onClick,color}) => {
    
    const colorMap = {
    green: "bg-green-700",
    red: "bg-red-700",

  };
  const bgColor = colorMap[color]
  console.log(bgColor)
  return (
    <div className='button'>
      <button className={`text-white ${bgColor} rounded-sm hover:bg-gray-500`} onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button

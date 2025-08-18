import React, { useState } from 'react'
import meme from '../assets/meme.gif'
import Button from './Button'

const Fun = ({setBack}) => {
    const [click, setClick] = useState(true)

    const handleClick = () => {
        console.log("clicked")
        setClick(false)
        setBack(false);
    }

  return (
    <>
    {click && <img src={meme} alt="" />}
     {click && <Button name="Want to go back?" onClick={handleClick}/>}
   </>
  )
}

export default Fun

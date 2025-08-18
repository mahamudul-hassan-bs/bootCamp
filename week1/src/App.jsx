
import { useState } from 'react';
import './App.css'
import Button from './components/Button'
import Fun from './components/Fun'
import HelloWorld from './components/HelloWorld'

function App() {
const [showFun, setShowFun] = useState(false);
const [back, setBack] = useState(false);

  const handleClick =()=>{
    setShowFun(true);
    setBack(true)
  }

  return (
    <>
      {!back && <HelloWorld/>}
      {!back && <Button name="Don't Click" onClick={handleClick}/>}
      {showFun && <Fun setBack={setBack}/>}
    </>
  )
}

export default App

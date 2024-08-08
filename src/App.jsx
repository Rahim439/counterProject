import { useState } from "react";
function App() {
  
  let [counter,setCounter]=useState(15)
  
  const addValue= ()=>{
    if(counter>=0)
    {
      setCounter(counter+=1);
    }

  }

  const removeValue=()=>
  {
    if(counter>0)
    {
      setCounter(counter-=1);
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button><br /><br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App

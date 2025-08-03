import React, { useState } from 'react'

const SimExMemo = () => {
    const [number,setNumber] = useState<number>(0)
    const [theme,setTheme] = useState<boolean>(true)
    
    const double = (()=>{
        
        console.log("Calculating...");
        return number * 2
    })()
   return (
    <>
    <input type='number' value={number} onChange={(e)=>setNumber(+e.target.value)}/>
    <button onClick={()=>setTheme(prev=>!prev)}>click to switch theme</button>
    <p>double {double}</p>
    </>
  )
}

export default SimExMemo
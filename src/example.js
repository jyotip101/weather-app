import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0) 
  useEffect(() => {
      
    const tempF = ((24 * 9)/5 + 32) + "F";
    const tempC = (24 - 273.15) + "C";
    document.title = `You clicked ${count} times`

  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
        
      </button>
    </div>
  )
}
export default Example
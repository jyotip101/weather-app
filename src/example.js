import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
        {/* 
         <div className="section-1"> 
                    <p className="time">
                        <span className="hores">
                            City Name: {data.name}</span>
                        <span className="mintes"></span>
                        <span className="day"></span>
                    </p>
                    <p className="location">
                        <span className="contry"></span> 
                        <span className="city"></span>
                    </p>
                    <p className="dates">
                        <span className="date"></span>
                        <span className="month"></span>
                        <span className="year"></span>
                    </p>
                </div>  
                <div className="section-2">
                    <p className="icon"></p>
                    <p className="main"></p>
                    <p className="temps">
                        <span className="temp"></span>
                        <span className="conv"></span>
                    </p>
                    <p className="des"></p>
                </div>
                <div className="section-3">
                    <p className="min">
                        <span className=""></span>
                        <span className=""></span>
                    </p>
                    <p className="max">
                        <span className=""></span>
                        <span className=""></span>
                    </p>
                    <p className="rise">
                        <span className=""></span>
                        <span className=""></span>
                    </p>
                    <p className="set">
                        <span className=""></span>
                        <span className=""></span>
                    </p>
                </div> */} 
      </button>
    </div>
  )
}
export default Example
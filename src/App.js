import React, { useEffect, useState} from 'react'
import Home from './homepage'
// import './css/app.css'
import Example from './example'
function App() {

  
  const API_URL = `https://api.openweathermap.org/data/2.5/`
  const API_KEY = '7c707d67bfaea395afd4f3cf375077ca' 

  const ICON_URL = `http://openweathermap.org/img/wn/`
  //  ${data.weather[0].icon}@2x.pn

  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const [data, setData] = useState([])

  useEffect(() =>{
      const fetchData = async() => {
          navigator.geolocation.getCurrentPosition( pos =>{
              setLat(pos.coords.latitude)
              setLon(pos.coords.longitude)
          })

     await fetch(`${API_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
          .then(res => res.json())
          .then(result => {
              setData(result)
              console.log(result)
          })
      }
      fetchData()
  }, [lat, lon])


  return (
    <div className="App"> 
    { (typeof data.main != 'undefined') ? (
          
      <Home datas={data}/>  

      ) : (
            <div> </div>
        ) } 
    </div>
  )
}

export default App

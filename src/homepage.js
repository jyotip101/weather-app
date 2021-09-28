import React, { useEffect, useState} from 'react'
import {
    Card,Button,Label

} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import moment from 'moment'

import './css/app.css'
const HomePage = () =>{

    const API_URL = `https://api.openweathermap.org/data/2.5/`
    const API_KEY = '7c707d67bfaea395afd4f3cf375077ca'
    // const ICON_URL = 'https://openweathermap.org/img/w'
 
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

    return(
    <> 
            <Card>
                <Card.Content>
                    <Card.Header textAlign='center'>
                        <p> 
                           <span>  {moment().format("LT")},   </span> 
                           <span>  {moment().format("Do MMMM YYYY")}</span> 
                    </p><p>
                            {data.sys.country}, {data.name} 
                            
                        </p>
                    </Card.Header>
                </Card.Content>
            </Card>  
            <Card>
                <Card.Content textAlign='center'>
                    <img width="50%" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                    <h3>{data.weather[0].main}   </h3>
                    <p>{data.weather[0].description}</p>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content textAlign='center'>
                    <p>
                        <i width='25px' class="fas fa-temperature-low"></i>
                        { ((data.main.temp_min ) - 273.15) + "C" } 
                        <i class="fas fa-temperature-high"></i>
                        {((data.main.temp_max  ) - 273.15) + "C" }
                    </p> 
                </Card.Content>
            </Card> 

            <Button className="sourceCode" >  
                    <a   href= "https://github.com/jyotip101/Weather-app-in-js/blob/main/src/script.js">
                        <i className='fab fa-github' /> source code
                    </a> 
            </Button>
</>
    )
}

export default HomePage
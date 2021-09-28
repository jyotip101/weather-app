import React, { useEffect, useState} from 'react'
import {
    Card,Button,Label

} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import moment from 'moment'

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
        <div className="homePage" textAlign='center'> 
            <Card>
                <Card.Content>
                    <Card.Header textAlign='center'>
                        <p className="day">Time: {moment().format("LT")}</p>
                    </Card.Header>
                    <Card.Header className="Header" textAlign="center">
                        City Name: {data.sys.country}, {data.name}
                    </Card.Header>
                    <Card.Header>
                        <p className="day">Day: {moment().format("Do MMMM YYYY")}</p>
                    </Card.Header>
                     
                    {/* <Button>Referes</Button> */}
                </Card.Content>
                </Card>  
                <Card>
                    <Card.Content textAlign='center'>
                        {/* <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                        <h5>{data.weather[0].main}       {data.sys.temp_max}</h5>
                        <p>{data.weather[0].description}</p> */}
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        {/* <p>
                        <i class="fas fa-temperature-low"></i>
                        {data.main.temp_min}
                        </p>
                        <p>
                        <i class="fas fa-temperature-high"></i>
                        {data.main.temp_max}
                        </p>
                        <p>
                        <i class="fas fa-sun"></i>
                        {data.sys.sunrise}
                        </p>
                        <p>
                        <i class="fas fa-moon"></i>
                        {data.sys.sunset}
                        </p> */}
                    </Card.Content>
                </Card>
        </div>
    </>
    )
}

export default HomePage
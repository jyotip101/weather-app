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
                        <p className="day"> {moment().format("LT")}</p>
                    </Card.Header>
                    <Card.Header className="Header" textAlign="center">
                         {data.sys.country}, {data.name}
                    </Card.Header>
                    <Card.Header textAlign='center'>
                        <p className="day"> {moment().format("Do MMMM YYYY")}</p>
                    </Card.Header>
                     
                    {/* <Button>Referes</Button> */}
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
                            {data.main.temp_min}
                        </p>
                        <p>
                            <i class="fas fa-temperature-high"></i>
                            {data.main.temp_max}
                        </p> 
                    </Card.Content>
                </Card> 
    </>
    )
}

export default HomePage
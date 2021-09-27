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

        fetch(`${API_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
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
                    <Card.Header className="Header" textAlign="center">
                        City Name: {data.name}
                    </Card.Header>
                    <Card.Header>
                    <p className="day">Day: {moment().format("Do MMMM YYYY")}</p>
                    </Card.Header>
                    <Card.Header>
                    <p className="day">Time: {moment().format("LT")}</p>
                    </Card.Header>
                    {/* <Button>Clivk</Button> */}
                </Card.Content>
                </Card>  
                <Card>
                    <Card.Content>
                        <Label image>
                             
                            <i>{data.name}</i>
                             hello
                        </Label>
                        <Label image>
                             {/* <i>{`${ICON_URL + data.weather[0].icon}@2x.png`}</i> */}
                             {/* <img src={`http://openweathermap.org/img/wn/${data.weather[0].main}@2x`} /> */}
                            <i>{data.weather[0].main}</i>
                             hello
                        </Label>
                    </Card.Content>
                </Card>
        </div>
    </>
    )
}

export default HomePage
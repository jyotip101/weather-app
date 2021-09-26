import React, { useEffect, useState} from 'react'

const HomePage = () =>{

    const API_URL = `https://api.openweathermap.org/data/2.5/`
    const API_KEY = '7c707d67bfaea395afd4f3cf375077ca'
    const ICON_URL = 'https://openweathermap.org/img/w'
 
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    const [data, setData] = useState([])

    useEffect(() =>{
        const fetchData = async() => {
            navigator.geolocation.getCurrentPosition( pos =>{
                setLat(pos.coords.latitude)
                setLon(pos.coords.longitude)
            })
        } 

        fetch(`${API_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result)
            })
        
        fetchData()
    }, [lat, lon])

    return(
    <>
        <div className="homePage">
            <div className="homePage-contant"><h1>homePage: </h1>
                <div className="section-1">
                    <p className="time">
                        <span className="hores"></span>
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
                </div>
            </div>
        </div>
    </>
    )
}

export default HomePage
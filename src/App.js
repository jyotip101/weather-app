import React, { useState } from 'react';
  
import './css/app.min.css';

const api = {
  key: "7c707d67bfaea395afd4f3cf375077ca",
  base: "https://api.openweathermap.org/data/2.5/"
} 

const App = () => {

  const [query, setQuery] = useState('');
  const [data, setData] = useState({});

  const search = e =>{
    if(e.key === 'Enter'){
      
      fetch(`${api.base}weather?q=${query}&unit=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
          setQuery("");
          console.log(result);
        });
    }
  }

  const dateBulder = (d) => {
  
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["Jan", "Feb", "Mar", "Ape", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nav", "Dec"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className="App">
        <main>
          <div className="search-bar">
            <input 
              type="text" 
              className="search"
              placeholder="Enter city name"
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof data.main != "undefined") ? ( 
          <div>
            <div className="location-bar">
              <div className="location">{data.name}, {data.sys.country}</div>
              <div className="date">{dateBulder(new Date())}</div>
            </div>
            
            <div className="weather-bar">
              <div className="temp">{Math.round(data.main.temp)}&deg;C </div>
              <div className="weather">{data.weather[0].main}</div>
            </div>
          </div>
            ): ('')}
        </main>
    </div>
  )
}

export default App

import React, { useState } from "react";
import axios from 'axios';
import "./Weather.css";



export default function Weather(props) {
  const[data, setData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setData({
          ready: true,
          temp: response.data.main.temp,
          wind: response.data.wind.speed,
          date: "Friday 20:00",
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          city: response.data.name,
          icon: "http://openweathermap.org/img/wn/04n.png"
        });
    }

    if (data.ready) {
      return (
 
      <div className="wrapper">
        <div className="weather-app-border">   
          <form>
            <div className="row">
              <div className="col-9">
                <input type="search" placeholder="Type a city..." className="form-control" />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
              </div>
            </div>
          </form>
          <div className="overview">
      <h1>{data.city}</h1>
      <ul>
      <li>Last updated: {data.date}</li>
        <li className="text-capitalize">{data.description}</li>
      </ul>
          </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temp">
          <img src={data.icon} alt="Weather icon" className="float-left" />
          <div className="float-left">
          <strong>{Math.round(data.temp)}</strong>
            <span className="units">
              <span>°C</span> | 
              <span>°F</span></span>
          </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: {data.humidity} %
            </li>
            <li>
              Wind: {data.wind} km/h
            </li>
          </ul>
        </div>  
      </div>
<div className="row weather-forecast">Forecast for the next 16 hours</div>
</div>  
<small className="steffi">
              Open-source code by <a href="https://github.com/Steffi-b-silly/react-weather-app"
                target="_blank" rel="noreferrer">Steffi Bayerl</a>
            </small>          
 </div>

    );

  } else {

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=e8388f76d1204b930fe636007445deaa&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
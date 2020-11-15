import React from "react";
import axios from 'axios';
import "./Weather.css";
import Loader from 'react-loader-spinner';


export default function Weather(props) {

    function handleResponse(response) {
        alert(`Weather in ${response.data.name} is ${response.data.main.temp}°C`)
    }

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=e8388f76d1204b930fe636007445deaa&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="container">
      <div className="wrapper">
        <div className="weather-app-border">
        <Loader
         type="ThreeDots"
         color="violet"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
      
          <form id="search-form">
            <div className="row">
              <div className="col-9">
                <input type="search" placeholder="Type a city..." className="form-control" id="city-input" />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
              </div>
            </div>
          </form>
          <div className="overview">
      <h1 id="city">Your city</h1>
      <ul>
        <li>Last updated: <span id="date">Sunday, 18:15 o'clock</span></li>
        <li id="description">Clear sky</li>
      </ul>
          </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temp">
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" id="weather-icon" className="float-left" />
          <div className="float-left">
          <strong id="temp">XY</strong>
            <span className="units">
              <span>°C</span> | 
              <span>°F</span></span>
          </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">XY</span> %
            </li>
            <li>
              Wind: <span id="wind">YZ</span> km/h
            </li>
          </ul>
        </div>  
      </div>
<div className="row weather-forecast" id="forecast">Forecast for the next 16 hours</div>
</div>
            <small className="steffi">
              Open-source code by <a href="https://github.com/Steffi-b-silly/Steffis-weather-app_final-project"
                target="_blank" rel="noreferrer">Steffi Bayerl</a>
            </small>
     </div>
    </div>
    )
}
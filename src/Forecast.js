import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecast(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {

        return (
            <div className="Forecast row">
                <ForecastPreview data={forecast.list[0]}/>
                <ForecastPreview data={forecast.list[1]}/>   
                <ForecastPreview data={forecast.list[2]}/>   
                <ForecastPreview data={forecast.list[3]}/>   
                <ForecastPreview data={forecast.list[4]}/>   
                <ForecastPreview data={forecast.list[5]}/>       
            </div>    
        );
    } else {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=e8388f76d1204b930fe636007445deaa&units=metric`;
    axios.get(url).then(handleForecast);

    return  null;
    }     
}



import React from "react";

export default function ForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000)
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp)
        return `${temperature}°C`;
    }

    return (
        <div className="ForecastPreview col">
            {hours()}
            <img src={props.icon} alt="Weather icon" />
            {temperature()}
        </div>
    );
}
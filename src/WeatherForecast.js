import React, { useState } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  let apiKey = "7eot7c9e36304bbfae357f4a433400e3";

  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;

  function handleResponse(response) {
    setForecast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="row"></div>
      </div>
    );
  } else {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
}

export default WeatherForecast;

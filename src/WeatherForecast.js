import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);

    console.log(response.data);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
           

            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "7eot7c9e36304bbfae357f4a433400e3";

    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

export default WeatherForecast;

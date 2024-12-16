import React from "react";
import WeatherIcon from "./WeatherIcon";

function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="ForecastDay">{props.data.time}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="ForecastTemperatures">
        <span className="ForecastTemperatures-max">{maxTemperature()}</span>
        <span className="ForecastTemperatures-min">{minTemperature()}</span>
      </div>
    </div>
  );
}

export default ForecastDay;

import React from "react";

import WeatherIcon from "./WeatherIcon";

function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecastDay">Sun</div>
      <WeatherIcon code="13d" />
      <div className="WeatherDailyTemperatures">
        <span className="WeatherForecast-temp-max">19°</span>
        <span className="WeatherForecast-temp-min">5°</span>
      </div>
    </div>
  );
}

export default WeatherForecastDay;

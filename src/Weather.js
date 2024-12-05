import React from "react";

import "./Weather.css";

function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>

      <ul>
        <li> Thursday 12:00 AM</li>
        <li>Rain and snow</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_s_rain.png"
            alt="Rain and snow"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Weather;

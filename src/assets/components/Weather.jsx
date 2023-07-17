import React from "react";
import { useState, useEffect } from "react";
import "./Weather.css";
import imgLoader from "../img/loader.svg";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  return (
    <div className="container-weather">
      <h1>Weather</h1>
      <p>blabla</p>
      <p>blabla</p>

      <div className="container-img-loader">
        <img src={imgLoader} alt="img" className="img-loader" />
      </div>
      <p>temps-img</p>
    </div>
  );
};

export default Weather;

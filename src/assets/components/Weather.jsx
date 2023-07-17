import React from "react";
import { useState, useEffect } from "react";
import "./Weather.css";
import imgLoader from "../img/loader.svg";
import icons from "../img/icons/03n.svg";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  return (
    <div className="container-weather">
      <h1>Weather</h1>
      <p className="city-name">Liege</p>
      <p className="country-name">Belgium</p>
      <p className="temp">0</p>
      <div className="container-icons">
        <img src={icons} alt="icon" className="icons-temp" />
      </div>
      <div className="container-img-loader ">
        <img src={imgLoader} alt="img" className="img-loader" />
      </div>
    </div>
  );
};

export default Weather;

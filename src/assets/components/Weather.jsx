import React from "react";
import { useState, useEffect } from "react";
import "./Weather.css";
import imgLoader from "../img/loader.svg";
// import icons from "../img/icons/03n.svg";

const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
// const APIKEY = "1212a454-8fac-46c6-9690-fe3dbc671616";
const apikey = "1212a454-8fac-46c6-9690-fe3dbc671616";
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${apikey}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setWeatherData({
          city: data.data.city,
          country: data.data.country,
          iconId: data.data.current.weather.ic,
          temperature: data.data.current.weather.tp,
          humidity: data.data.current.weather.hu,
          wind: data.data.current.weather.ws,
        });
      });
  }, []);

  return (
  // container principal 
    <div className="container-weather">
      <div className={`container-img-loader ${!weatherData && "active"}`}>
        <img src={imgLoader} alt="img" className="img-loader" />
      </div>
      {weatherData && (
        <>
          <p className="city-name">{weatherData.city}</p>
          <p className="country-name">{weatherData.country}</p>

{/* card humidité temperature vent */}
          <div className="container-weather-info">
            <div className="card-weather">
              <p>Humidité</p>

              <div className="card-compo">
                <p>%</p>
                <p className="humidity">{weatherData.humidity}</p>
              </div>
            </div>

            <div className="card-weather">
              <p>Température</p>
              <div className="card-compo">
                <p>°</p>
                <p className="temp">{weatherData.temperature}</p>
              </div>
            </div>

            <div className="card-weather">
              <p >Vent</p>
              <div className="card-compo">
                <p>km/h</p>
                <p className="wind">{weatherData.wind}</p>
              </div>
            </div>
          </div>
{/* container de l'image SVG */}
          <div className="container-icons">
            <img
              // src={import.meta.env.BASE_URL + "public/icons/09n.svg"}
              src={`/icons/${weatherData.iconId}.svg`}
              alt="weather icon"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;

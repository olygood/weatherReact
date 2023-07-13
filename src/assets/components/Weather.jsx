import React from 'react';
import { useState,useEffect } from 'react';
import "./Weather.css"

const Weather = () => {
    const [weather, setWeather] = useState(null);
    return (
        <div className='container'>
            <h1>Weather</h1>
        </div>
    );
}

export default Weather;

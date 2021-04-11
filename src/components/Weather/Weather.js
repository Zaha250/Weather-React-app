import React from 'react';
import './Weather.scss'

const Weather = ({ temp, si,  icon, toggleSi }) => {
  return(
    <div className="weather app__weather">
      <img 
        src={`https://openweathermap.org/img/w/${icon}.png`}
        alt="weather-icon"
      />
      <h4 
        className="weather__temp"
        onClick={toggleSi}
      >
        {temp}°{si}
      </h4>
    </div>
  )
}

export default Weather;
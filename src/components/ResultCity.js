import React from 'react';
import './ResultCity.css';

const ResultCity = (props) => {
  const {error,  city, sunrise, sunset,temperature, pressure, wind} = props.weather;

  let result = null

  if(!error && city){

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();

    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

    result = (
      <div>
        <h2>{city}</h2>
        <p className="temp"> {temperature} &#176;C</p>
        <p className="sunrise">Wschód słońca: {sunriseTime}</p>
        <p className="sunset">Zachód słońca: {sunsetTime}</p>
        <p className="wind">Prędkość wiatru: {wind} m/s</p>
        <p className="pressure">Ciśnienie: {pressure} hPa</p>
      </div>
    )
  }


  return ( 
    <div className = "result">
      {error ? `Nie mamy w bazie ${city}`: result }
    </div>
   );
}
 
export default ResultCity;
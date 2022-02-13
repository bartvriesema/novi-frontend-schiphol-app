import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
import kelvinToCelsius from "../helpers/kelvinToCelsius";
import toTimeString from "../helpers/toTimeString";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({});

  async function getWeather() {
    const weather = await axios.get("http://localhost:5000/weather");
    setWeatherData(weather.data);
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      {Object.keys(weatherData).length > 0 && (
        <div className="weather-container">
          <h2 className="weather-header">Current weather conditions</h2>
          <ul className="weather-list">
            <li>
              <img
                className="weather-icon"
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Weather icon"
              />
            </li>
            <li>Temperature: {kelvinToCelsius(weatherData.main.temp)}&deg;C</li>

            <li>Wind speed: {weatherData.wind.speed} m/s</li>
            <li>Wind direction: {weatherData.wind.deg}&deg;</li>
            <li>
              Visibility:{" "}
              {new Intl.NumberFormat("nl-NL").format(weatherData.visibility)}{" "}
              meter
            </li>
            <li>Sunrise: {toTimeString(weatherData.sys.sunrise)}</li>
            <li>Sunset: {toTimeString(weatherData.sys.sunset)}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Weather;

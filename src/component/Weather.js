import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
import kelvinToCelsius from "../helpers/kelvinToCelsius";
import toTimeString from "../helpers/toTimeString";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, toggleLoading] = useState(true);

  async function getWeather() {
    const weather = await axios.get(
      `${process.env.REACT_APP_PROXY_WEATHER_URL}`
    );
    return weather;
  }

  async function testBackend() {
    const backend = await axios.get(`${process.env.REACT_APP_NOVI_TEST}`);
    return backend;
  }

  useEffect(() => {
    getWeather().then((response) => {
      setWeatherData(response.data);
      toggleLoading(!isLoading);
    });
    testBackend().then((response) => console.log(response.data));
  }, []);

  return (
    <>
      {Object.keys(weatherData).length > 0 && (
        <div className="weather-container">
          <h2 className="weather-header">Current weather conditions</h2>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
          <ul className="weather-list">
            <li>
              <FontAwesomeIcon icon="fa-solid fa-temperature-half" />{" "}
              Temperature: {kelvinToCelsius(weatherData.main.temp)}&deg;C
            </li>

            <li>
              <FontAwesomeIcon icon="fa-solid fa-wind" /> Wind speed:{" "}
              {weatherData.wind.speed} m/s
            </li>
            <li>
              <FontAwesomeIcon icon="fa-regular fa-compass" /> Wind direction:{" "}
              {weatherData.wind.deg}&deg;
            </li>
            <li>
              <FontAwesomeIcon icon="fa-regular fa-eye" /> Visibility:{" "}
              {new Intl.NumberFormat("nl-NL").format(weatherData.visibility)}{" "}
              meter
            </li>
            <li>
              <FontAwesomeIcon icon="fa-regular fa-sun" /> Sunrise:{" "}
              {toTimeString(weatherData.sys.sunrise)}
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-sun" /> Sunset:{" "}
              {toTimeString(weatherData.sys.sunset)}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Weather;

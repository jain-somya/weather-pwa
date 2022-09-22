import React, { useState } from "react";
import "./App.css";
import { fetchWeather } from "./api/fetchWeather";
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
    }
  };
  return (
    <div className="main-container">
      <input
        onKeyPress={search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="search"
        placeholder="Search..."
      ></input>
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
          <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          </div>
          {/* <p> {weather.weather[0]}</p> */}
        </div>
      )}
    </div>
  );
}

export default App;

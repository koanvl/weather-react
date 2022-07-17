import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";

export default function SearchForm() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [forecastLoad, setForecastLoad] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    function showForecast(response) {
      setTemperature(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].main);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setIcon(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      setForecastLoad(true);
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c252ffd932e3d53580c8c66264e47b0&units=metric`;
    axios.get(url).then(showForecast);
  }
  function changeCity(event) {
    return setCity(event.target.value);
  }
  if (forecastLoad) {
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input type="search" onChange={changeCity} />
          <input type="submit" value="Submit" />
        </form>
        <Forecast
          temperature={temperature}
          description={description}
          humidity={humidity}
          wind={wind}
          icon={icon}
        />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input type="search" onChange={changeCity} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
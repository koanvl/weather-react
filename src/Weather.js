import React from "react";
import axios from "axios";

export default function Weather(props){
  function showForecast(response){
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3c252ffd932e3d53580c8c66264e47b0&units=metric`;
    axios.get(url).then(showForecast);
  return <h2>Weather App</h2>
}
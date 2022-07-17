import React from "react";

export default function Forecast(props) {
  return (
    <ul>
      <li>Temperature: {props.temperature}°C</li>
      <li>Description: {props.description}</li>
      <li>Humidity: {props.humidity}%</li>
      <li>Wind: {props.wind} km/h</li>
      <li>
        <img src={props.icon} alt="forecast icon"/>
      </li>
    </ul>
  );
}
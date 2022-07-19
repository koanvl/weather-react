import React from "react";
import Weather from "../../Weather/Weather";
import Footer from "../Footer/Footer";

export default function WeatherApp(){
  return (
  <div>
    <div className="container container">
      <Weather/>
    </div>
    <Footer/>
    </div>);
}
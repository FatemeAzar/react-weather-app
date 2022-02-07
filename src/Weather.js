import react from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city"
          className="form-control"
        />
        <input type="submit" value="search" className="btn btn-primary" />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="Mostlu Cloudy"
          />
          6°c
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 1% </li>
            <li>Humidity: 39%</li>
            <li>Wind: 14 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

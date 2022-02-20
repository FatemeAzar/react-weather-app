import "./App.css";
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a href="https://github.com/FatemeAzar/react-weather-app">
            open-source{" "}
          </a>
          code by Fateme Azar
        </footer>
      </div>
    </div>
  );
}

export default App;

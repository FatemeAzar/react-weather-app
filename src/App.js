import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/FatemeAzar/react-weather-app"
            target="_blank"
          >
            open-source{" "}
          </a>
          code by Fateme Azar
        </footer>
      </div>
    </div>
  );
}

export default App;

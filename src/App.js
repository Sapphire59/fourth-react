import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by
          <a
            href="https://github.com/Sapphire59"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Deborah Chacko{" "}
          </a>
          is open-sourced on{" "}
          <a
            href="https://github.com/Sapphire59/fourth-react"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>{" "}
          and is hosted on{" "}
          <a
            href="https://dc-react-weather-app.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

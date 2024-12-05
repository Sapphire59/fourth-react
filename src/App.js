import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
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
          href="https://deborah-weather-react-project.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;

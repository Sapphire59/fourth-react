import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>My Weather App</h1>

      <footer>
        This project was coded by
        <a href="https://github.com/Sapphire59" target="_blank">
          {" "}
          Deborah Chacko{" "}
        </a>
        is open-sourced on{" "}
        <a href="https://github.com/Sapphire59/fourth-react" target="_blank">
          Github
        </a>{" "}
        and is hosted on{" "}
        <a
          href="https://deborah-weather-react-project.netlify.app/"
          target="_blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;

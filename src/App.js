import React from "react";
import "./App.css";

const App = (props) => {
  const cities = ["Mumbai", "Bengaluru", "Chennai"];

  return (
    <>
      <ul>
        {cities.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
    </>
  );
};

export default App;

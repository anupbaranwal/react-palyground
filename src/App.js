import React from "react";
import "./App.css";

const App = (props) => {
  const cities = ["Mumbai", "Bengaluru", "Chennai"];
  const citiesJsx = cities.map((city) => <p>{city}</p>);

  return <>{citiesJsx}</>;
};

export default App;

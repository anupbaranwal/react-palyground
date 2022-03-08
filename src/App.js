import React from "react";
import "./App.css";

const App = (props) => {
  const showGreetings = true;

  return <>{showGreetings ? <h3>Good Morning!!!</h3> : null}</>;
};

export default App;

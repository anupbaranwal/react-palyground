import React, { useState } from "react";
import "./App.css";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={incrementHandler}>Increment</button>
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("everytime any component get render");
  });

  useEffect(() => {
    console.log("only once during creation");
  }, []);

  useEffect(() => {
    console.log("gets called when counter field is updated");
  }, [counter]);

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={incrementHandler}>Increment</button>
    </>
  );
};

export default App;

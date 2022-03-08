import React from "react";
import "./App.css";

const App = (props) => {
  let counter = 0;

  const increaseTheCounter = () => {
    //This doesn't changes the value of counter in the View. But in console it changes
    console.log("counter new Value is " + ++counter);
  };

  return (
    <>
      <h3>{counter}</h3>
      <button onClick={increaseTheCounter}>Increment</button>
    </>
  );
};
export default App;

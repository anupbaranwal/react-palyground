import React from "react";
import "./App.css";

const Add = (a, b) => {
  return a + b;
};

const currentTime = () => {
  return 10;
};

const App = (props) => {
  const hiThereJsx = <h3>Hi there</h3>;
  const helloWorldJsx = <p>Hello There!</p>;
  return (
    <>
      {hiThereJsx} {helloWorldJsx}
      Add of 5 + 6 is: {Add(5, 6)}
      {currentTime() < 12 ? <h3>Good Morning</h3> : <h3>Good Afternoon</h3>}
    </>
  );
};
export default App;

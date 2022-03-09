import "./App.css";
import { useState } from "react";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  //don't use this approach for thread safety of counter
  const updateTheCounter = () => {
    setCounter(counter + 1);
  };

  // follow this approach
  const updateTheCounter1 = () => {
    setCounter(() => {
      return counter + 1;
    });
  };

  return (
    <>
      <h3> Hello World!!!</h3>
      <hr />
      <p>Counter is {counter}</p>
      <button className="btn btn-primary" onClick={updateTheCounter1}>
        Update The Counter
      </button>
    </>
  );
};

export default App;

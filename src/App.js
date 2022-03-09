import "./App.css";
import { useState } from "react";
import ClassComponentExample from "./ClassComponentExample";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const updateTheCounter = () => {
    setCounter(() => {
      return counter + 1;
    });
  };

  return (
    <>
      <h3> Hello World!!!</h3>
      <hr />
      <p>Counter is {counter}</p>
      <button className="btn btn-primary" onClick={updateTheCounter}>
        Update The Counter
      </button>
      <hr />
      {counter % 2 === 0 ? <ClassComponentExample /> : null}
    </>
  );
};

export default App;

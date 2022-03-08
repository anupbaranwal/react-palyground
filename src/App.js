import React from "react";
import "./App.css";

const App = (props) => {
  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <input type="text" onInput={handleInput} />
    </>
  );
};
export default App;

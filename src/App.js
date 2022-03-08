import React from "react";
import "./App.css";
import Greeting from "./Greeting";
import Sample from "./Sample";

const App = (props) => {
  const countries = ["India", "UK", "Russia", "US"];
  const name = "Anup";

  const callBackParentFunction = (message) => {
    console.log(message);
  };

  return (
    <>
      <h2>Below is the child component</h2>
      <hr />
      <Sample countries={countries} />
      <Greeting name={name} parentCallback={callBackParentFunction} />
    </>
  );
};

export default App;

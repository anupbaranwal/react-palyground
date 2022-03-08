import React from "react";
import "./App.css";
import Sample from "./Sample";

const App = (props) => {
  const countries = ["India", "UK", "Russia", "US"];
  return (
    <>
      <h2>Below is the child component</h2>
      <hr />
      <Sample countries={countries} />
    </>
  );
};

export default App;

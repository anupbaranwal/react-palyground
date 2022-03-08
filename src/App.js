import React from "react";
import "./App.css";

const App = (props) => {
  const jsxGoodMorning = <h3>Good Morning~~</h3>;
  const jsxGoodAfternoon = <h3>Good Afternoon~~</h3>;

  return <>{[jsxGoodAfternoon, jsxGoodMorning]}</>;
};
export default App;

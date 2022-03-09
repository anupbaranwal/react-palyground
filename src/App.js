import Sample from "./Sample";
import "./App.css";

const App = (props) => {
  const countries = ["India", "Nepal", "France", "USA"];

  const foo = () => {
    return (
      <p>
        Component embedding from parent to child (invoked through callback from
        child)
      </p>
    );
  };
  return (
    <>
      <h3> Hello World!!!</h3>
      <hr />
      <Sample
        countries={countries}
        foo={foo}
        inlineEmbeddingCallback={() => {
          return (
            <p>
              Inline Component embedding from parent to child (invoked through
              callback from child)
            </p>
          );
        }}
      />
    </>
  );
};

export default App;

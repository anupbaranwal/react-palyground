const Greeting = (props) => {
  const greetBack = () => {
    if (!!props.parentCallback) {
      props.parentCallback();
    }
  };
  return (
    <>
      <h2>Hello {props.name}!!</h2>
      <h2> How are you?</h2>
      <hr />
      <button onClick={greetBack}>Greet Back!!</button>
    </>
  );
};

export default Greeting;

const Greeting = (props) => {
  const greetBack = (greetingMessage) => {
    if (!!props.parentCallback) {
      props.parentCallback(greetingMessage);
    }
  };
  return (
    <>
      <h2>Hello {props.name}!!</h2>
      <h2> How are you?</h2>
      <hr />
      <button onClick={() => greetBack("I am good!! How about you?")}>
        Greet Back!!
      </button>
    </>
  );
};

export default Greeting;
